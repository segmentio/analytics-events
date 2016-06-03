'use strict';

var changeCase = require('change-case');
var each = require('@ndhoule/each');
var events = require('../lib');
var objectKeys = require('@ndhoule/keys');
var keys = objectKeys(events);
var assert = require('proclaim');

each(function(key) {
  var regexp = events[key];

  test(regexp, changeCase.camel(key));
  test(regexp, changeCase.snake(key));
  test(regexp, changeCase.sentence(key));
  test(regexp, changeCase.title(key));

  function test(regexp, str) {
    it(str + ' == ' + regexp, function() {
      assert(regexp.test(str), str + ' != ' + regexp);
    });
  }
}, keys);
