var A = {
  each: function(arr, visit){
    for (var i = 0; i < arr.length; i++){
      visit(arr[i], i)
    }
  }
}