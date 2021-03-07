# GitCloud Client

[![Build Status](https://github.com/nativefier/gitcloud-client/workflows/ci/badge.svg)](https://github.com/nativefier/gitcloud-client/actions?query=workflow%3Aci)

## Installation

Only supported on Node >= 10

```bash
$ npm install --save gitcloud
```

## Usage

```javascript
const gitCloud = require('gitcloud');

gitCloud('http://nativefier.github.io/gitcloud')
    .then(fileIndex => {
        console.log(fileIndex);
    })
    .catch(error => {
        console.error(error);
    });
```

## Tests

```bash
$ npm test
```

## License

MIT
