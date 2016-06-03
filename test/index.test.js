'use strict';

var to = require('to-case');
var each = require('@ndhoule/each');
var events = require('../lib');
var objectKeys = require('@ndhoule/keys');
var keys = objectKeys(events);
var assert = require('proclaim');

each(function(key) {
  var regexp = events[key];

  test(regexp, to.camel(key));
  test(regexp, to.none(key));
  test(regexp, to.snake(key));
  test(regexp, to.sentence(key));
  test(regexp, to.capital(key));

  function test(regexp, str) {
    it(str + ' == ' + regexp, function() {
      assert(regexp.test(str), str + ' != ' + regexp);
    });
  }
}, keys);
