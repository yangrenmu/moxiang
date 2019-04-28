import fs from "fs"
import path from "path"
import author from "../models/authors"
export const jsonToData = () => {
  fs.readFile(
    path.join(__dirname, "../../data/chinese_poetry/json/authors.song.json"),
    (err, data) => {
      if (err) {
        console.log("read author json error", err)
      } else {
        const authorList = JSON.parse(data)
        authorList.map(item => {
          const authorInfo = {
            author_name: item.name,
            author_desc: item.desc
          }
          const authorData = new author(authorInfo)
          author.findOne({ 'author_name': item.name }, (err, data) => {
            if (!data) {
              authorData.save(err => {
                if (err) {
                  console.log("save author error", item, err)
                }
              })
            }
          })
        })
        console.log("save author data success")
      }
    }
  )
}

// export const getAuthorBy

