var A = require('./arrayhelpers')
var M = require('./messenger')

module.exports = function FilterableArray(arr){
  arr = arr || []
  var viewable = arr
  var fa = {}
  
  fa.push = function(){
    arr.push.apply(arr, arguments)
    update()
  }

  fa.setFilter = function(fun){
    if (fun){
      viewable = A.filter(arr, fun)
    }else{
      viewable = arr
    }
    update()
  }

  fa.indexOf = function(obj){
    return viewable.indexOf(obj)
  }

  update()
  function update(){
    for (var i = 0; i < viewable.length; i++){
      fa[i] = viewable[i]
    }
    fa.length = viewable.length
    M.emit(fa, 'change')
  }

  return fa
}