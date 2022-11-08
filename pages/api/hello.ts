import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
// import client from '../../lib/mongodb.js'
import { MongoClient } from 'mongodb'

const handler = nextConnect<NextApiRequest, NextApiResponse>()
const { MONGODB_URI } = process.env

if (!MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}
const client = new MongoClient(MONGODB_URI)
// const client = new MongoClient(MONGODB_URI)

handler.get(async (req, res) => {
  // GET 요청 처리
  try {
    await client.connect()
    console.log('Success')
  } catch (error) {
    console.error('Failed to connect to MongoDB server')
    throw error
  }
  const collection = client.db('test-database').collection('test-collection')
  const doc = await collection.findOne()

  res.status(200).json({ test: 'Meetup Inserted!', doc: doc })
})

handler.post((req, res) => {
  // POST 요청 처리
})

export default handler
