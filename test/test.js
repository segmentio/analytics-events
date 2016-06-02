
var to = require('to-case');
var events = require('../');
var keys = Object.keys(events);

var assert; try {
  assert = require('@segment/assert');
} catch(e) {
  assert = require('assert');
}

keys.forEach(function(key){
  var regexp = events[key];

  console.log(regexp);

  test(regexp, to.camel(key));
  test(regexp, to.none(key));
  test(regexp, to.snake(key));
  test(regexp, to.sentence(key));
  test(regexp, to.capital(key));

  function test(regexp, str){
    it(str + ' == ' + regexp, function(){
      assert(regexp.test(str), str + ' != ' + regexp);
    })
  }
})
