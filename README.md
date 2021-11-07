# `exceldate`

[![Codeship Status for floydnoel/exceldate](https://app.codeship.com/projects/362f08b0-c04a-0136-91bf-5a413c092475/status?branch=master)](https://app.codeship.com/projects/313502)

`exceldate` is a simple date utility package which converts excel timestamps to JS dates. It was built from [knowledge gathered](https://github.com/floydnoel/exceldate/blob/master/index.js#L31) in research of "how to convert spreadsheet dates to JavaScript dates?" It features tests, no dependencies (except for testing), typing via JSDoc and TypeScript, and a permissive license. This library has been maintained and improved since 2018. Feature requests or contributions are always welcome!

## Installation

```bash
yarn add exceldate
# or
npm install exceldate
```

## Usage

Check it out:

```js
const exceldate = require('exceldate')

// use it directly
console.log(exceldate('1').toISOString()) // 1899-12-31T00:00:00.000Z
console.log(exceldate(4242.4242).toISOString()) // 1911-08-12T10:10:50.880Z

// or use it with a callback
exceldate(9000, (err, res) => {
  if (!err) console.log(res.toISOString()) // 1924-08-21T00:00:00.000Z
})
```

## Testing

Prerequisites:

- clone/download the repo
- navigate to the repo: `cd exceldate`
- install dev dependencies to test: `yarn` or `npm i`

To test run `yarn test` or `npm test`

## License

This is free and unencumbered software released "as is" into the public domain, without warranty of any kind.
For more information, please refer to the LICENSE file and <https://unlicense.org>
