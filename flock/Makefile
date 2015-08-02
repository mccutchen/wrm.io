PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

# We pass the same args to browserify and watchify
build_args := src/main.js -o build/build.js

build/build.js: deps src/*.js
	mkdir -p build
	browserify $(build_args)

deps: package.json
	npm install

watch: deps
	mkdir -p build
	watchify $(build_args) -v

check: src/*.js
	eslint src

clean:
	rm -r build

.PHONY: check clean watch
