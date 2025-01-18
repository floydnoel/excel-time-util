# `exceldate`

`exceldate` is a straightforward date utility for turning Excel-serialized timestamps into JavaScript `Date` objects. It was built from the ground up to answer the question: "How to convert spreadsheet dates to JavaScript dates?" Since 2018, `exceldate` has been kept up-to-date with tests, no dependencies (excluding testing), and solid type definitions (via both JSDoc and TypeScript). It’s open source and ready for feature requests or contributions!

## Installation

```sh
yarn add exceldate
# or
npm install exceldate
```

## Usage

Below are a few examples to show how it works:

```js
const exceldate = require('exceldate');

// Direct usage:
const result = exceldate('1').toISOString();
console.log(result); // 1899-12-31T00:00:00.000Z

const anotherResult = exceldate(4242.4242).toISOString();
console.log(anotherResult); // 1911-08-12T10:10:50.880Z

// Via callback:
exceldate(9000, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.toISOString()); // 1924-08-21T00:00:00.000Z
  }
});

// Using Promises:
const util = require('util');
const exceldateAsync = util.promisify(exceldate);

exceldateAsync(9000)
  .then((date) => {
    console.log(date.toISOString()); // 1924-08-21T00:00:00.000Z
  })
  .catch(console.error);

// Using async/await:
async function runExample() {
  try {
    const date = await exceldateAsync(9000);
    console.log(date.toISOString());
  } catch (err) {
    console.error(err);
  }
}
```

## Testing

To run tests locally:

1. Clone this repository: `git clone git@github.com:floydnoel/exceldate.git`
2. Navigate into the project folder: `cd exceldate`
3. Install dev dependencies: `yarn`
4. Execute the tests: `yarn test`

## TypeScript Types

Type definitions are automatically generated via the TypeScript compiler based on `tsconfig.json`. If you need to regenerate them, just run:

```sh
yarn typegen
```

## License

This is free and unencumbered software released "as is" into the public domain, without warranty of any kind.
For more information, please refer to the LICENSE file and <https://unlicense.org>
