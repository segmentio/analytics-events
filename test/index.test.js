'use strict';

var sentence = require('to-sentence-case');
var capital = require('to-capital-case');
var snake = require('to-snake-case');
var camel = require('to-camel-case');
var nocase = require('to-no-case');
var each = require('@ndhoule/each');
var events = require('../lib');
var objectKeys = require('@ndhoule/keys');
var keys = objectKeys(events);
var assert = require('proclaim');

each(function(key) {
  var regexp = events[key];

  test(regexp, camel(key));
  test(regexp, nocase(key));
  test(regexp, snake(key));
  test(regexp, sentence(key));
  test(regexp, capital(key));

  function test(regexp, str) {
    it(str + ' == ' + regexp, function() {
      assert(regexp.test(str), str + ' != ' + regexp);
    });
  }
}, keys);
