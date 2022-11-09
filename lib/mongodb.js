//The mongodb.js file from the example
import { MongoClient } from 'mongodb'

const { MONGODB_URI } = process.env
const options = {}

if (!MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const client = new MongoClient(MONGODB_URI, options)
const clientPromise = client.connect()

export default clientPromise
