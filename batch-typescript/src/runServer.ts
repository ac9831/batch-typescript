import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {insertCsvToMongo} from './insert-csv-to-mongo'
import {getFileNameAndNumber} from "./utils";

export const runServer = (mongodb) => {
  const app = express()

  app
    .use(bodyParser.urlencoded({extended: true}))
    .use(cors())
    .get('/', (req, res) => res.json({message: 'Hello world!'}))
    .get('/users/:skip/:limit', async (req, res) => {
      const {skip, limit} = req.params
      const usersCollection = await mongodb.collection('users')
      const cursor = await usersCollection
        .find({})
        .sort({name: 1})
        .skip(parseInt(skip))
        .limit(parseInt(limit))
      const result = await cursor.toArray()
      res.json(result)
    })
    .get('/insert/csv/mongodb', async (req, res) =>{
      const [filename] = getFileNameAndNumber('./data/fake-100000.csv', 1)
      await insertCsvToMongo(filename, 'users', {birthday: -1, name: 1})
      res.json("완료")
    })
    .listen(80,() => console.log(`server started...`))
}
