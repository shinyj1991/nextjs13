import { connectToDatabase } from '../../lib/mongodb'

async function getTodos(req, res) {
  try {
    const { db } = await connectToDatabase()
    const todos = await db.collection('todo').find({}).sort({ title: -1 }).toArray()
    const result = {
      data: JSON.parse(JSON.stringify(todos)),
      success: true,
    }

    return res.json(result)
  } catch (error: any) {
    const result = {
      data: [],
      message: new Error(error).message,
      success: false,
    }
    return res.json(result)
  }
}

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      return getTodos(req, res)
    }
    // case 'POST': {
    //   return addPost(req, res)
    // }
    // case 'PUT': {
    //   return updatePost(req, res)
    // }
    // case 'DELETE': {
    //   return deletePost(req, res)
    // }
  }
}
