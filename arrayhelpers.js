module.exports = {
  each: function(arr, visit){
    for (var i = 0; i < arr.length; i++){
      visit(arr[i], i)
    }
  },
  map: function(arr, fun){
    var ret = []
    for (var i = 0; i < arr.length; i++){
      ret.push(fun(arr[i], i))
    }
    return ret
  },
  remove: function(arr, item){
    var idx = arr.indexOf(item)
    if (idx === -1) return
    arr.splice(idx, 1)
  },
  filter: function(arr, fun){
    var ret = []
    for (var i = 0; i < arr.length; i++){
      if (fun(arr[i], i)){
        ret.push(arr[i])
      }
    }
    return ret
  }
}