var Link = require('./link')
var Flow = require('./flow')
var M = require('./messenger')
var A = require('./arrayhelpers')

module.exports = function FilterBar(){
  var filterBar = Flow(
    allBtn = Link('All', '#all'),
    activeBtn = Link('Active', '#active'),
    completedBtn = Link('Completed', '#completed')
  )

  A.each([allBtn, activeBtn, completedBtn], function(btn){
    M.on(btn, 'click', function(){
      M.emit(filterBar, 'change', btn.hash())
    })
  })

  return filterBar
}