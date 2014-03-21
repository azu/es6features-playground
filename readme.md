## es6features-playground [![Build Status](https://travis-ci.org/azu/es6features-playground.svg)](https://travis-ci.org/azu/es6features-playground)

Executable ES6 example codes for [lukehoban/es6features](https://github.com/lukehoban/es6features "lukehoban/es6features").

### traceur 0.0.30

Some case are not supported.

* "Enhanced Object Literals"
* "Const"
* "Comprehensions"
* "Module Loaders"
* "Subclassable Built-ins"


Other ... "Tail Calls"

### V8

You should set `--harmony` for node and use Node.js **> v0.11**.

* `Set`
* `Map`
* `WeakSet`
* `WeakMap`

### Proxy

Node v0.11 doesn't support  [Direct Proxies](http://wiki.ecmascript.org/doku.php?id=harmony:direct_proxies "Direct Proxies").

You need to use [tvcutsem/harmony-reflect](https://github.com/tvcutsem/harmony-reflect "tvcutsem/harmony-reflect").



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
