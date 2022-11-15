const paramsToQuery = (params) => {
  return Object.keys(params)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&')
}

export const client = {
  get: async (path, params = {}) => {
    try {
      const query = paramsToQuery(params)

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENTRY}${path}?${query}`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
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
  post: async (path, data = {}) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENTRY}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
