import {MongoClient} from 'mongodb'

export const connect = async (mongoUrl: string = 'mongodb://svc.gksl2.cloudtype.app:30403') => {
  console.log(mongoUrl)
  const client = await new MongoClient(mongoUrl)
  return client
}
