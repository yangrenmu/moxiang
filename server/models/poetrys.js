import mongoose from "mongoose"

const Schema = mongoose.Schema

const PoetrySchema = new Schema({
  author_id: String,
  title: String,
  content: String,
  yunlv_rule: String,
  author: String,
  dynasty: String
})

const Poetry = mongoose.model("Poetry", PoetrySchema)

export default Poetry
