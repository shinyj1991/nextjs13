import { connectToDatabase } from './mongodb'

export const server = {
  get: async (req, res, business) => {
    try {
      const { db } = await connectToDatabase()
      const result = await business(db)

      return res.json(result)
    } catch (error) {
      const result = {
        message: new Error(error).message,
        success: false,
      }
      return res.json(result)
    }
  },
}
