// require("./controller/index")
import express from 'express'
import db from './mongodb/db'
import * as author from "./controller/authors"
const app = express()

app.get('/author', author.getAuthorByName)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
