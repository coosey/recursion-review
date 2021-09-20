// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  
  //if statement conditions {null, undefined, function, string number boolean}
  if (obj === null) {
    return 'null';
  }
  if (obj === undefined || typeof(obj) === 'function') {
    return '';
  }
  if (typeof(obj) === 'boolean' || typeof(obj) === 'number' || typeof(obj) === 'string') {
    return result.concat(obj);
  }

  //if (Array.isArray(obj))
    // result += stringifJSON(obj[i])

  //if (typeof obj === 'object')
};
