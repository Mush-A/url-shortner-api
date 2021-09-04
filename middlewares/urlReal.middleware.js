const dns = require('dns');
const url = require('url');

const isUrlReal = (req, res, next) => {
  let myUrl = new URL(`${req.body.url}`);

  const isReal = dns.lookup(myUrl.hostname, (err, add) => {
    if(add != null) {
      return next();
    } else {
      return res
        .json({
          error: "Invalid URL"
        })
    }
  })
}

module.exports = isUrlReal;