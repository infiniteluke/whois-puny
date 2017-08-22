const punycode = require('punycode');
const whois = require('whois-json');

module.exports = domain =>
  new Promise((resolve, reject) => {
    const encodedDomain = punycode.toASCII(domain);
    whois(encodedDomain, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
