import "dotenv/config";
import "reflect-metadata";
import {createConnection} from "typeorm";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./UserResolver";
import cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import {User} from "./entity/User";
import { createAccessToken, createRefreshToken } from "./auth";
import { sendRefreshToken } from "./sendRefreshToken";

(async () => {
	const app = express();
	// not necessery
	const path = require('path');
	app.use(express.static(path.join(__dirname, 'html5')));
	app.get('/html5', function(_req, res) {
		res.sendFile(path.join(__dirname, 'html5', 'res.html'));
	});
	// ben award
	app.get('/', (_req, res) => {res.send("<h1 >hello world is sended</h1>")} );
	app.use(cookieParser());
//	const a1 = process.env.REFRESH_TOKEN_SECRET ; const a2 = process.env.ACCESS_TOKEN_SECRET;
//	console.log(`secrets: refresh_token is ${a1}; access_token is ${a2}`);
	app.post("/refresh_token", async (req, res ) => { // for security purpouse haven't used graphql
	  // console.log(req.headers); afterward console.log()
	  const token = req.cookies.jid;
      if (!token) { return res.send({ ok: false, accessToken: "" }); }
	  let payload: any = null;
	  try { 
		  payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
	   } catch(err) { 
	  	console.log(err);
		  return res.send({ ok: false, accessToken: "" });
	}
	// token is valid and we can send back a n access token
	  const  user = await User.findOne({ id:  payload.userId}) ;
	  if (!user) { return res.send({ ok: false, accessToken: "" }); }
	  if (user.tokenVersion !== payload.tokenVersion) {
	        	return res.send({ ok: false, accessToken: "" });
	  }
	  sendRefreshToken(res, createRefreshToken(user));
    return res.send({ ok: true, accessToken: createAccessToken(user)});
	});
	
	await createConnection();
  const apolloServer = new ApolloServer({
		schema: await buildSchema({ resolvers: [UserResolver] }),
		context: ({ req, res }) => ({ req, res })
  });
  apolloServer.applyMiddleware({ app }); 
  const print = process.versions;
  console.log(print);
  const port = 4000 || process.env.PORT;
  app.listen(port, () => {
    console.log(`express server started at ${port}`);
  })
})() 

// # Schema for graphql
//const apolloServer = new ApolloServer({
//	typeDefs: `type Query { hello: String! }`,
//	resolvers: { Query: { hello: () => "hello World!" }}
//});