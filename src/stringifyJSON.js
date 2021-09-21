// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  
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
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (obj.length > 1 && i < obj.length - 1) {
        result += ',';
      }
    }
    return result += ']';
  }
  result = [];
  if (typeof obj === 'object') {
    for (var key in obj) {
      if (obj[key] === undefined || typeof(obj[key]) === 'function') {
        continue;
      } else {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + result + '}';
  }
}