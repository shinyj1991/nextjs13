import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { MongoClient } from 'mongodb'

const handler = nextConnect<NextApiRequest, NextApiResponse>()
const { MONGODB_URI, MONGODB_DB } = process.env

if (!MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}
const client = new MongoClient(MONGODB_URI)

handler.get(async (req, res) => {
  // GET 요청 처리
  try {
    await client.connect()
  } catch (error) {
    throw new Error('Failed to connect to MongoDB server')
  }
  const collection = client.db('simplizm').collection('todo')
  const data = await collection.findOne()

  res.status(200).json({
    data: data,
  })
})

handler.post((req, res) => {
  // POST 요청 처리
})

export default handler
