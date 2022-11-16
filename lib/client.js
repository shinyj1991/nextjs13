const paramsToQuery = (params) => {
  return Object.keys(params).length > 0
    ? Object.keys(params)
        .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&')
    : ''
}

const request = async ({ method, path = '', query = {}, params = {} }) => {
  const pullpath = `${process.env.NEXT_PUBLIC_API_ENTRY}${path}?${paramsToQuery(query)}`

  try {
    const res = await fetch(pullpath, {
      method: method,
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      body: Object.keys(params).length > 0 ? JSON.stringify(params) : null,
    })

    if (!res.ok) {
      throw res
    }

    const result = await res.json()

    return {
      success: true,
      data: result,
    }
  } catch (error) {
    console.log(`ClientError ${pullpath} ${method} | ${error.status} - ${error.statusText}`)

    return {
      success: false,
      status: error.status,
      statusText: error.statusText,
    }
  }
}

export const client = {
  get: async (path, query) => await request({ method: 'GET', path, query }),
  post: async (path, params) => await request({ method: 'POST', path, params }),
  put: async (path, params) => await request({ method: 'PUT', path, params }),
  delete: async (path, params) => await request({ method: 'DELETE', path, params }),
}
