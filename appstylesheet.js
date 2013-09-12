module.exports = function(){

  var sm = {}
  var rules = {}
  var styleSheet
  
  sm.addRule = function(rule){
    rules[rule] = true
  }

  sm.install = function(){
    var style = document.createElement('style')
    var text = Object.keys(rules).join('\n')
    style.appendChild(document.createTextNode('\n' + text + '\n'));
    document.getElementsByTagName('head')[0].appendChild(style)
    var styleSheets = document.styleSheets
    styleSheet = styleSheets[styleSheets.length - 1]
    
    
  }

  return sm

}