function *factorial(n) {
    let acum = 1;
    for(let i = 1; i <= n; i++) {
        acum *= i;
        yield acum;
        
    }
}

for(let n of factorial(5)) {
    console.log(n);
}

// Solution

   function *factorial (n) {
      var result = 1;
      for (var i = 1; i <= n; i++) {
        result *= i;
        yield result;
      }
    }
    
    for (var n of factorial(5)) {
      console.log(n)
    }