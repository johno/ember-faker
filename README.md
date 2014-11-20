# Ember Faker

This is an Ember addon for [Faker.js](https://github.com/marak/Faker.js/)
that includes some useful helpers for prototyping.

## Installation

```javascript
npm install --save-dev ember-faker
ember g ember-faker
```

## Usage

#### Import the faker module

```javascript
import faker from 'faker';

// ...

user.set('name', faker.name.firstName());
```
#### Use the helpers

```hbs
{{fake-first-name}}
{{fake-list-name}}
{{fake-email}}
{{fake-address}}
```

## Development

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Thanks to the following:

* [Faker.js](https://github.com/marak/Faker.js/).

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
