import { connectToDatabase } from '../../lib/mongodb'

async function getData(req, res) {
  return res.json({
    message: 'Hello World',
    success: true,
  })
}

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      return getData(req, res)
    }
  }
}
