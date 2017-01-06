function* upper(items) {
    for (let item of items) {
        try {
            if (typeof (item) !== 'string') {
                throw (new Error());
            }
            else {
                yield item.toUpperCase();
            };
        } 
        catch (error) {
            yield 'null';
        }
    }

}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
    console.log(item);
}

// Solution

    function *upper (items) {
      for (var item of items) {
        try {
          yield item.toUpperCase();
        } catch (e) {
          yield null;
        }
      }
    }
    
    var bad_items = ['a', 'B', 1, 'c'];
    
    for (var item of upper(bad_items)) {
      console.log(item);
    }

