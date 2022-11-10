import { connectToDatabase } from '../../lib/mongodb'

async function getTodos(req, res) {
  try {
    let { db } = await connectToDatabase()
    let todos = await db.collection('todo').find({}).sort({ title: -1 }).toArray()
    return res.json({
      data: JSON.parse(JSON.stringify(todos)),
      success: true,
    })
  } catch (error: any) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
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
