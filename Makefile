
BINS= node_modules/.bin
PHANTOMJS=$(BINS)/mocha-phantomjs \
	--path node_modules/.bin/phantomjs

build: index.js test/test.js
	@$(BINS)/duo --development test/test.js build/build.js

test: test-phantom test-node

test-phantom: build
	@$(PHANTOMJS) test/index.html

test-node: node_modules
	@node_modules/.bin/mocha -R spec

.PHONY: test
