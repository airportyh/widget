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
  }
}