
function defineMessengerProp(obj){
  var value = {
    handlers: {}
  }
  if (Object.defineProperty){
    Object.defineProperty(obj, '__messenger__', {
      value: value,
      enumerable: false
    })
  }else{
    obj.__messenger__ = value
  }
}

function on(obj, evt, callback, ctx){
  if (!obj.__messenger__){
    defineMessengerProp(obj)
  }
  var handlers = obj.__messenger__.handlers
  if (!handlers[evt]){
    handlers[evt] = []
  }
  handlers[evt].push([callback, ctx])
}

function off(obj, evt, callback, ctx){

}

function emit(obj, evt){
  if (!obj.__messenger__) return
  var args = Array.prototype.slice.call(arguments, 2)
  var handlers = obj.__messenger__.handlers
  handlers = handlers[evt] || []
  for (var i = 0; i < handlers.length; i++){
    var pair = handlers[i]
    var callback = pair[0]
    var ctx = pair[1]
    callback.apply(ctx, args)
  }
}

var messager = module.exports = {
  emit: emit,
  on: on,
  off: off,
  removeListener: off
}