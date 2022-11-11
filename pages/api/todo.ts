import { server } from '../../lib/server'

export default async function handler(req: any, res: any) {
  switch (req.method) {
    case 'GET': {
      return server.get(req, res, async (database: any) => {
        const todos = await database.collection('todo').find({}).sort({ title: -1 }).toArray()

        return {
          data: todos,
          success: true,
        }
      })
    }
  }
}
