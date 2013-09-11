var DomHelper = {
  setText: function(elm, text){
    if ('textContent' in elm){
      elm.textContent = text
    }else{
      elm.innerText = text
    }
  },
  addClass: function(elm, name){
    var names = elm.className.split(/\s+/)
    if (names.indexOf(name) !== -1) return
    names.push(name)
    elm.className = names.join(' ')
  },
  removeClass: function(elm, name){
    var names = elm.className.split(/\s+/)
    if (names.indexOf(name) === -1) return
    names = names.filter(function(n){ return n !== name })
    elm.className = names.join(' ')
  }
}