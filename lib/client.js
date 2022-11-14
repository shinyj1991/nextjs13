const { NEXT_API_ENTRY } = process.env

export const client = {
  get: async (path, payload = {}) => {
    try {
      const res = await fetch(`${NEXT_API_ENTRY}${path}`, payload)

      if (!res.ok) {
        throw res
      }

      const result = await res.json()

      return {
        success: true,
        ...result,
      }
    } catch (err) {
      console.log(`Error | ${path} | ${err.status} | ${err.statusText}`)

      return {
        success: false,
        status: err.status,
        statusText: err.statusText,
      }
    }
  },
}
