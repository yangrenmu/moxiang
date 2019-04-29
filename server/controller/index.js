// require("../mongodb/db")
// require("./authors")
// require("./poetrys")
import db from '../mongodb/db'
import author from './authors'
import poetry from './poetrys'

// 将 author json 文件存到数据库
author.jsonToData()
// 将 poetry json 文件存到数据库
poetry.poetryData()
