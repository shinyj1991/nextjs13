import { connectToDatabase } from './mongodb'

export const server = async (res, business) => {
  res.setHeader('Cache-Control', 'no-cache')

  try {
    const { db } = await connectToDatabase()
    const data = await business(db)
    const result = await res.json(data)

    return {
      success: true,
      ...result,
    }
  } catch (err) {
    const error = {
      success: false,
      message: new Error(err).message,
    }

    return res.json(error)
  }
}
