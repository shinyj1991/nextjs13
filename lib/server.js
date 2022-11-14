import { connectToDatabase } from './mongodb'

export const server = {
  get: async (req, res, business) => {
    try {
      const { db } = await connectToDatabase()
      const result = await business(db)

      return res.json(result)
    } catch (err) {
      const error = {
        message: new Error(err).message,
        success: false,
      }
      return res.json(error)
    }
  },
}
