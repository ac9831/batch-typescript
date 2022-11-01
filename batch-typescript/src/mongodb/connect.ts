import {MongoClient} from 'mongodb'

export const connect = async (mongoUrl: string = 'mongodb://localhost:27017') => {
  console.log(mongoUrl)
  const client = await new MongoClient(mongoUrl)
  return client
}
