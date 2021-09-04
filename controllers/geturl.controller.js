const db = require('../model/db')

const geturl = (req, res) => {
  db.get(req.params.num)
  .then(val => {
    console.log(req.params.num, val)
    return res.redirect(val);
  })
}

module.exports = geturl;