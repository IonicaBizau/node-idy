
[![idy](http://i.imgur.com/tVtnd3Y.png)](#)

# idy [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/idy.svg)](https://www.npmjs.com/package/idy) [![Downloads](https://img.shields.io/npm/dt/idy.svg)](https://www.npmjs.com/package/idy) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Generate random and potentially unique ids.

## :cloud: Installation

```sh
$ npm i --save idy
```


## :clipboard: Example



```js
// Dependencies
var Idy = require("idy");

console.log(Idy());
// => k5goo82pv0

console.log(Idy(20));
// => gfmruywoe3uie3680l54
```

## :memo: Documentation


### `Idy(length)`
Generates a random id and potentially unique.

#### Params
- **Number** `length`: The id length (default: 10).

#### Return
- **String** The generated id.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`engine-builder`](https://github.com/IonicaBizau/engine-parser) (by jillix)—Engine composition parser.
 - [`engine-parser`](https://github.com/IonicaBizau/engine-parser) (by jillix)—Engine composition parser.
 - [`svg.connectable.js`](https://github.com/jillix/svg.connectable.js) (by jillix)—A JavaScript library for connecting SVG things.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
