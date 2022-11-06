import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

handler.get((req, res) => {
  // GET 요청 처리
  res.status(200).json({ test: 'Meetup Inserted!' })
})

handler.post((req, res) => {
  // POST 요청 처리
})

export default handler
