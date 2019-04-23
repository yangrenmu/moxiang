import mongoose from "mongoose"
import chalk from "chalk"
mongoose.connect("mongodb://127.0.0.1:27017/tangsong", {
  useNewUrlParser: true
})
const db = mongoose.connection
db.once("open", () => {
  console.log(chalk.green("连接数据库成功"))
})
