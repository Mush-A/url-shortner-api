const db = require('../model/db')

const shorturl = (req, res) => {
  const original_url =  req.body.url;

  let short_url = Math.floor(Math.random() * 5000);

  db.set(`${short_url}`, `${original_url}`);

  console.log(original_url)

  res
  .status(200)
  .json({
    original_url: original_url,
    short_url: short_url
  })
}

module.exports = shorturl;