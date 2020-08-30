#github
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M master
  git remote add origin https://github.com/perlov3301/ba200817new.git
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

