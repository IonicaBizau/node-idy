[![idy](http://i.imgur.com/tVtnd3Y.png)](#)

# idy [![Support this project][donate-now]][paypal-donations]

Generate random and potentially unique ids.

## Installation

```sh
$ npm i --save idy
```

## Example

```js
// Dependencies
var Idy = require("idy");

console.log(Idy());
// => k5goo82pv0

console.log(Idy(20));
// => gfmruywoe3uie3680l54
```

## Documentation

### `Idy(length)`
Generates a random id and potentially unique.

#### Params
- **Number** `length`: The id length (default: 10).

#### Return
- **String** The generated id.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`engine-parser`](https://github.com/IonicaBizau/engine-parser) by jillix

 - [`svg.connectable.js`](https://github.com/jillix/svg.connectable.js) by jillix

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md