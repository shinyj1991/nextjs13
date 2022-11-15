import { server } from '../../lib/server'

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      return server(res, async (database) => {
        const todos = await database.collection('todo').find({}).sort({ title: -1 }).toArray()

        return {
          data: todos,
        }
      })
    }
    case 'POST': {
      return server(res, async (database) => {
        const todos = await database.collection('todo').find({}).sort({ title: -1 }).toArray()

        return {
          data: todos,
        }
      })
    }
  }
}
