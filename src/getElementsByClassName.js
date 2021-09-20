// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// Must use classList & childNodes
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var result = [];
// Interate over each node in body
for ( var i = 0; i < body.childNodes.length; i++) {
  var currentNode = body.childNodes[i];
  // if the node has a class list and that class list contains the class name
  if (currentNode.classList && currentNode.classList.contains(className)) {
    result.push(currentNode);
  }
}
// if the node has child nodes
  //for each child node, concat it to result array
  result = result.concat(getElementsByClassName(currentNode));
};
