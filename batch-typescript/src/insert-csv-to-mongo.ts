import {connect} from './mongodb/connect'
import {csvFileReaderGenerator} from './csv/csvFileReaderGenerator'

export const insertCsvToMongo = async (csvFilename, collectionName, index) => {
  let connection
  try {
    connection = await connect()
    const db = await connection.db('bigdata')
    const collection = db.collection(collectionName)
    await collection.deleteMany({})
    await collection.createIndex(index)
    let line = 1
    for(let object of csvFileReaderGenerator(csvFilename)) {
      await collection.insertOne(object)
      console.log(`${line++} inserted.`)
    }
    console.log(`\n insertion complete.`)
  } catch(e) {
    console.log(e.message)
  } finally {
    connection.colse
  }
}