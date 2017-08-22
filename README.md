# WHOIS Puny

Docs match [json-whois](https://github.com/mikemaccana/whois-json) with support for domains like 🍕.ws.

Example:

```js
  const whois = require('./index.js');

  whois('🍕.ws', (err, result) => {
    console.log(JSON.stringify(result, null, 2))
  });
```
