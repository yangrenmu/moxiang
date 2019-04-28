// require("./controller/index")
import express from 'express'
import db from './mongodb/db'
import author from "./models/authors"
const app = express()

app.get('/', function (req, res) {
  author.find({ 'author_name': '宋太祖' }, (err, data) => {
    console.log('------', data)
    res.json(data)
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
