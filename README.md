# iostreams-https

Bootstrap stream provider for [iostreams](https://github.com/webcast-io/iostreams)

[![Build Status](https://travis-ci.org/webcast-io/iostreams-https.png)](https://travis-ci.org/webcast-io/iostreams-https?branch=master)
[![Coverage Status](https://coveralls.io/repos/webcast-io/iostreams-https/badge.png?branch=master)](https://coveralls.io/r/webcast-io/iostreams-https?branch=master)
[![Dependency Status](https://david-dm.org/webcast-io/iostreams-https.png?theme=shields.io)](https://david-dm.org/webcast-io/iostreams-https)

## Install

    $ npm install iostreams iostreams-https

## Usage

```js
var iostreams = require('iostreams');

iostreams.use(require('iostreams-https'));

// Getting an input stream
iostreams.getInputStream('https://bensbit.co.uk/ben/lolcat.png', function(err, inputStream) {

});

// Getting an output stream
iostreams.getOutputStream('https://bensbit.co.uk/api/upload/lolcat.png', function(err, outputStream) {

});

// Getting an input and output stream
iostrams.getInputAndOutputStream(
  'https://inputpath',
  'https://outputpath',
  function(err, inputStream, outputStream) {
    intputStream.pipe(outputStream);
  }
);
```

## Licence

MIT