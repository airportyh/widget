function Incrementer(){
  var count = 1
  return function(){
    return count++
  }
}