// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// Must use classList & childNodes
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(node, className) {
  var body = node;
  var result = [];
// Interate over each node in body
for ( var i = 0; i < body.childNodes.length; i++) {
  var currentNode = body.childNodes[i];
  // if the node has a class list and that class list contains the class name
  if (currentNode.classList && currentNode.classList.contains(className)) {
    result.push(currentNode);
    console.log(result)
  }
  // if the node has child nodes
  if (currentNode.childNodes) {
  //for each child node, concat it to result array
  var child = currentNode.childNodes;
  child.forEach(function(child) {
    if(!result.includes(child)) {
      result = result.concat(getElementsByClassName(child, className));
    }
     // getElementByClassName needs a class name as an imput
  });
  }
};
  return result;

};
