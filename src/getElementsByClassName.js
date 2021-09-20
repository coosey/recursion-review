// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// Must use classList & childNodes
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document) {
  //var item = node;
  var result = [];
//var body = doc.body
  //declare var hasChilds = body.hasChildNodes()
  //if (hasChilds)

// Interate over each node in body
  // if(item.hasChildNodes()) {
  //   for ( var i = 0; i < item.childNodes.length; i++) {
  //     var currentNode = item.childNodes[i];
      // if the node has a class list and that class list contains the class name
      if (currentNode.classList && currentNode.classList.contains(className)) {
        result.push(currentNode);
      }
      // if the node has child nodes
      if (currentNode.childNodes) {
        //for each child node, concat it to result array
        var child = currentNode.childNodes;
        child.forEach(function(child) {
          if(!result.includes(child)) {
            result = result.concat(getElementsByClassName(child, className));
          }
        });
      }
    };
  } else {
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }
    return result;
    getElementsByClassName(document.body, className);
  };
  //-------------------------------------
  //if node.classList && node.classList.contains(className)
  if (node.classList && node.classList.contains(className)) {
    //push node into result
    result.push(node);
  }
  //if node has children
  if (node.childNodes) {
    //for loop thru node.children
    for (var i = 0; i < node.childNodes.length; i++) {
      result = result.concat(getElementsByClassName(className, node.childNodes[i]))
    }
  }
  //return node
}
