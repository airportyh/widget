module.exports = function Text(str){
  var text = {
    element: document.createTextNode(str),
    setText: function(str){
      text.element.data = str
    }
  }
  return text
}
