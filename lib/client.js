const { NEXT_API_ENTRY } = process.env

export const client = {
  get: async (path, payload = {}) => {
    try {
      const res = await fetch(`${NEXT_API_ENTRY}${path}`, payload)

      if (res.status === 404) {
        throw new Error(res.status)
      } else {
        return res.json()
      }
    } catch (error) {
      console.log(`path : ${path} | `, error)

      return false
    }
  },
}
