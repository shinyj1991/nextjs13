import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import client from '../../lib/mongodb.js'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

handler.get((req, res) => {
  // GET 요청 처리
  const database = client.db('test-database')
  // const collection = database.collection('test-collection')
  // const doc = await collection.findOne()
  console.log(database)

  res.status(200).json({ test: 'Meetup Inserted!' })
})

handler.post((req, res) => {
  // POST 요청 처리
})

export default handler
