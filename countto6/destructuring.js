let userArray = process.argv.slice(2);
let userInfo = {};
[ , userInfo.username, userInfo.email] = userArray;

console.log(userInfo);

//Official

 let args = process.argv.slice(2);
 let result = {};

 [, result.username, result.email] = args;

 console.log(result);