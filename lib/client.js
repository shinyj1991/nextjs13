const { NEXT_API_ENTRY } = process.env

export const client = {
  get: async (path, params = {}) => {
    try {
      const query = Object.keys(params)
        .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&')

      const res = await fetch(`${NEXT_API_ENTRY}${path}?${query}`, {
        method: 'GET',
      })

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
