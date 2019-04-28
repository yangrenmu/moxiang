import fs from "fs"
import path from "path"
import author from "../models/authors"
import poetry from "../models/poetrys"

const poetryPath = '../../data/chinese_poetry/json/poet.'

async function poetryData(type) {
  let num = 200000
  while (num < 255000) {
    const fsData = fs.readFileSync(path.join(__dirname, `${poetryPath}${type}.${num}.json`))
    if (fsData) {
      const poetryList = JSON.parse(fsData)
      for await (let item of poetryList) {
        await author.findOne({ 'author_name': item.author }, (err, data) => {
          let authorId = 0
          if (err) {
            console.log('find author error', error)
          } else if (data) {
            authorId = data._id
          }
          const poetryInfo = {
            author_id: authorId,
            author: item.author,
            title: item.title,
            content: JSON.stringify(item.paragraphs),
            yunlv_rule: JSON.stringify(item.strains),
            dynasty: type
          }
          const poetryData = new poetry(poetryInfo)
          poetryData.save(err => {
            if (err) {
              console.log('save poetry data error', err)
            }
          })
        })
      }
    }
    console.log('save poetry num: ', num)
    num += 1000
  }
}

poetryData('song')
console.log('save poetry data success')
