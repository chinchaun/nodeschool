function *range(from, to) {
    while(from <= to) {
        yield from;
        from += 1;
    };
}

for (var r of range(5, 10)) {
    console.log( r );
}

// Solution 

 function *range(from, to) {
      for(var i = from; i <= to; i++) {
        yield i;
      }
    }
    
    for (var r of range(5, 10)) {
        console.log( r );
    }