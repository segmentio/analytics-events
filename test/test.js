
var sentence = require('to-sentence-case');
var capital = require('to-capital-case');
var snake = require('to-snake-case');
var camel = require('to-camel-case');
var nocase = require('to-no-case');
var assert = require('assert');
var events = require('../');
var keys = Object.keys(events);

keys.forEach(function(key){
  var regexp = events[key];

  test(regexp, camel(key));
  test(regexp, nocase(key));
  test(regexp, snake(key));
  test(regexp, sentence(key));
  test(regexp, capital(key));

  function test(regexp, str){
    it(str + ' == ' + regexp, function(){
      assert(regexp.test(str), str + ' != ' + regexp);
    })
  }
})
