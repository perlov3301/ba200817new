import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import { MyContext } from "./MyContext";

// header called authorization at standard format "bearer 1234asdfasd"
export const isAuth: MiddlewareFn<MyContext> = ({context}, next) => {// next return Resolver
	const authorization = context.req.headers['authorization'];
	// cle
	console.log(`authorization: ${authorization}`);
	if (!authorization 
		|| (typeof authorization ===  undefined) 
		|| authorization === undefined
		|| authorization == null)
	   { throw new Error('not authenticated'); }
	// if (!authorization) { throw new  Error('not authenticated'); }
	try {
		const token = authorization?.split(" ")[1];
		const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
		context.payload = payload as any; // type is any
	} catch (err) { console.log(err); }
	return next(); };
