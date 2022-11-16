import { ObjectId } from 'mongodb'
import { server } from '../../lib/server'

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      return server(res, async (database) => {
        const data = await database.collection('todo').find({}).sort({ title: 1 }).toArray()

        return data
      })
    }
    case 'POST': {
      return server(res, async (database) => {
        const data = await database.collection('todo').insertOne(req.body)

        return data
      })
    }
    case 'PUT': {
      return server(res, async (database) => {
        const data = await database.collection('todo').updateOne(
          {
            _id: new ObjectId(req.body._id),
          },
          {
            $set: {
              title: req.body.title,
            },
          }
        )

        return data
      })
    }
    case 'DELETE': {
      return server(res, async (database) => {
        const data = await database.collection('todo').deleteOne({
          _id: new ObjectId(req.body._id),
        })

        return data
      })
    }
  }
}
