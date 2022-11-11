import { connectToDatabase } from '../../lib/mongodb'
import { server } from '../../lib/server'

export default async function handler(req: any, res: any) {
  switch (req.method) {
    case 'GET': {
      return server.get(req, res, async () => {
        const { db } = await connectToDatabase()
        const todos = await db.collection('todo').find({}).sort({ title: -1 }).toArray()

        return {
          data: JSON.parse(JSON.stringify(todos)),
          success: true,
        }
      })
    }
  }
}
