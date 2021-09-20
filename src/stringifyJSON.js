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
  if (typeof(obj) === 'boolean' || typeof(obj) === 'number') {
    return String (obj);
  }
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    result += '[';
    // result += stringifJSON(obj[i])
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (obj.length > 1 && i < obj.length - 1) {
        result += ',';
      }
    }
    return result += ']';
  }
  if (typeof obj === 'object') {
    for (var key in obj) {
      
    }
  }
  
}