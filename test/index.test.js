'use strict';

var changeCase = require('change-case');
var each = require('@ndhoule/each');
var events = require('../lib');
var assert = require('proclaim');

var transforms = [
  changeCase.snake,
  changeCase.camel,
  changeCase.sentence,
  changeCase.title
];

each(function(regexp, event) {
  each(function(transform) {
    test(regexp, transform(event), true);
    test(regexp, transform(event + 'test'), false);
    test(regexp, transform('test' + event), false);
  }, transforms);

  function test(regexp, str, shouldMatch) {
    it(str + ' == ' + regexp, function() {
      assert(
        regexp.test(str) === shouldMatch,
        str + (shouldMatch ? ' != ' : ' == ') + regexp
      );
    });
  }
}, events);
