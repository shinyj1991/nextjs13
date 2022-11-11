import { MongoClient } from 'mongodb'
import { env } from 'process'

const { MONGODB_URI, MONGODB_DB, SERVE_TYPE } = process.env

// check the MongoDB URI
if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environmental variable')
}

// check the MongoDB DB
if (!MONGODB_DB) {
  throw new Error('Define the MONGODB_DB environmental variable')
}

let cachedClient = null
let cachedDb = null

export async function connectToDatabase() {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb,
    }
  }

  // set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsInsecure: SERVE_TYPE === 'DEVELOPMENT',
  }

  // Connect to cluster
  let client = new MongoClient(MONGODB_URI, opts)
  await client.connect()
  let db = client.db(MONGODB_DB)

  // set cache
  cachedClient = client
  cachedDb = db

  return {
    client: cachedClient,
    db: cachedDb,
  }
}
