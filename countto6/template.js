var name = process.argv[2];

var greeting = `Hello, ${name}!
Your name lowercased is "${name.toString().toLowerCase()}".`;

console.log(greeting);

//Official


  console.log(`Hello, ${process.argv[2]}!
  Your name lowercased is "${process.argv[2].toLowerCase()}".`);
  