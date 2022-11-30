import {connect} from '../mongodb/connect'

const connectTest = async() => {
  let connection
  try {
    connection = await connect('mongodb://localhost:27017')
    console.log('connection OK.', connection)
  } catch(e) {
    console.log(e.message)
  } finally {
    connection.close()
  }
}

connectTest()