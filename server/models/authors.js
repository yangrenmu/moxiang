import mongoose from "mongoose"

const Schema = mongoose.Schema

const AuthorSchema = new Schema({
  author_name: String,
  author_desc: String
})

const Author = mongoose.model("Author", AuthorSchema)

export default Author
