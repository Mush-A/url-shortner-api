var validUrl = require('valid-url');

const urlValidator = (req, res, next) => {

  if (validUrl.isHttpsUri(req.body.url) || validUrl.isHttpUri(req.body.url)) {
    next();
  } else {
    res
    .json({
      error: "Invalid URL"
    })
  }
}

module.exports = urlValidator;