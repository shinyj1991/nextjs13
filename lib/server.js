export const server = {
  get: async (req, res, business) => {
    try {
      const result = await business()

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
