#github
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M master
  git remote add origin https://github.com/perlov3301/ba200817new.git
  git push -u origin master
  git add . 
  git commit -am "refresh token"
/** get remote URL: %git config --get remote.origin.url  */
  git push -u origin master
# play slow
osascript -e 'tell application "QuickTime Player" to set rate of document 1 to 0.77'
# createdb
% source .bash_profile
%createdb jwt-auth1
# graphql login Settings : "request.credentials": "omit", => "request.credentials": "include",
# .env => index.ts =>console.log(process.env.ACCESS_TOKEN_SECRET, ' ',process.env.REFRESH_TOKEN_SECRET );
! means: I know that it is undifined
# authentication:     
  log in into a website 
	user supplies email and password
	website generates a token for the user 
	the user's browser stores the token
	when the user makes subsequent request to the website, their 
	  token will be sent along with their request
	the website will validate the token and use it to figure who the user is
# postman => post => localhost/refresh_cookie => cookie => domain "localhost" => name "jid=asdfasf"
    console.log(req.headers);
	console.log(req.cookies);
#web npx create-react-app web --typescript
// https://stackoverflow.com/questions/63005568/property-setlink-is-missing-in-type-apolloclientnormalizedcacheobject-but
//  client: ApolloClient<TCache> | DefaultClient<TCache>;
#react : schema=http://localhost:4000/graphql
fragments: src/graphql/*.graphql
out: src/generated/graphql.tsx
config: codegen.yml
package.json => script=>"gen"
generate codegen.yml: npm install
install plugins: 
🚀
#written var in graphql(using $):
mutation Register($email: String!, $password: String!) {
  register(email: $email,  password: $password)
}
# database within /server/ormconfig.json
# graphql
# response=>set-cookie
  server index.ts before applyMiddleware(app, cors)
  : app.use(cors({origin: "http://localhost:3000}", credentials: true))
  webAppoloClient({uri: "http://localhost:4000",credential: include});
  http://localhost:3000 is from console=>origin
  Set-Cookie: jid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJ
                  0b2tlblZlcnNpb24iOjAsImlhdCI6MTU5OTM1MDc4NiwiZXhwIjoxNTk5
                  OTU1NTg2fQ.n3QpA94gy3r9P0ZVeFSFiYry4HejRW0brMG1b4VQPak; 
                  Path=/; HttpOnly
