import { connectToDatabase } from './mongodb'

export const server = async (res, business) => {
  try {
    const { db } = await connectToDatabase()
    const data = await business(db)
    const result = await res.json(data)

    return result
  } catch (err) {
    const error = {
      message: new Error(err).message,
    }

    return error
  }
}
