# proxy-generator
👽️ create random proxies

### Install

with npm:
```sh
$ npm i @wonoly/proxy-generator
```

### Usage

```js
const { generateProxy } = require("@wonoly/proxy-generator");

(async function() {
    var proxy = await generateProxy();
    console.log(proxy)
})()
```