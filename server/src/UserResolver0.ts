import { Arg, Ctx, Field, ObjectType, Resolver } from 'type-graphql';
import { Query, Mutation, UseMiddleware } from 'type-graphql';
import {hash, compare} from 'bcryptjs';
import { User } from './entity/User';
import { MyContext } from './MyContext';
import { createAccessToken, createRefreshToken } from './auth';
import { isAuth } from './isAuth'; 

@ObjectType()
class LoginResponse {
	@Field()
	accessToken: string
}
@Resolver() 
export class UserResolver {
	@Query(() => String)
	hello() { return 'hi!' }

	@Query(() => [User])
	users() { return User.find(); }

	@Query(() => String) 
	@UseMiddleware(isAuth)
	bye(
		@Ctx() {payload}: MyContext
	) { 
		console.log(payload);
		return  `your user id is: ${payload!.userId}`; }

	@Mutation(() => Boolean)
	async register(
		@Arg('email') tableemail: string,
		@Arg('password') varpassword: string,
	) { 
		const hashedPassword = await hash(varpassword, 12);
		try {
			await User.insert({
				tableemail,
				password: hashedPassword
			});
		} catch (err) {
			console.log(err);
			return false;
		}
	
		return true;
	 }
	
	 @Mutation(() => LoginResponse)
	 async login(
		 @Arg('email') tableemail: string,
		 @Arg('password') varpassword: string,
		 @Ctx() { res }: MyContext,
	 ):Promise<LoginResponse> { 	
			 const user = await User.findOne({where: {tableemail}});
			 if (!user) { throw new Error("could not find user"); }
			 const valid = await compare(varpassword, user.password); 
			 if (!valid) { throw new Error("bad password") }
			 // login successful
			 res.cookie('jid', createRefreshToken(user),{ httpOnly: true});
		   return { accessToken: createAccessToken(user) };
		}
}
