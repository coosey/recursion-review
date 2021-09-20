// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// Must use classList & childNodes
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body) {
  var result = [];
  //if node.classList && node.classList.contains(className)
  if (node.classList && node.classList.contains(className)) {
    //push node into result
    result.push(node);
  }
  //if node has children
  if (node.childNodes) {
    //for loop thru node.children
    for (var i = 0; i < node.childNodes.length; i++) {
      result = result.concat(getElementsByClassName(className, node.childNodes[i]));
    }
  }
  return result;
}
