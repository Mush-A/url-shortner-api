const Database = require("@replit/database");

const db = new Database();

// delete everything
const dropDB = (drop) => {
  if (drop == true) {
    db.list().then(keys => {
      keys.map(a => {
        db.delete(a).then(val => {
          console.log(val + ' deleted')
        })
      })
    })
  }
}

dropDB(false);


// read all keys and values
db.list().then(keys => {
  console.log(keys)
  keys.map(a => {
    db.get(a).then(val => console.log(val))
  })
})

module.exports = db;