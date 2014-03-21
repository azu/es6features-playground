## es6features-playground

Executable ES6 example codes for [lukehoban/es6features](https://github.com/lukehoban/es6features "lukehoban/es6features").

### traceur 0.0.30

Some case is not support.

* "Enhanced Object Literals"
* "Comprehensions"

## Setting WebStorm

Set JavaScript language version `ECMAScript6`

![es6](http://monosnap.com/image/AjMQVOEm3wNqx2TvIHZAsFlXBLqo99.png)

Add Watcher for traceur.

```sh
$ traceur --experimental --sourcemap --out out/file.js --script src/file.js
```

Don't forget `--script` option!

![watcher](http://monosnap.com/image/qOsIm4q6QVLjUwF5zdQgISjVT2qrKE.png)

## Run test

You should call `require('traceur');`.
(Needed `traceur-runtime.js`)

This project has `mocha.opts` - `--require test/test-helper.js`

> test-helper.js

```js
require('traceur');
```
