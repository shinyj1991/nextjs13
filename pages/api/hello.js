import { server } from '../../lib/server'

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      return server(res, async () => {
        return {
          message: 'Hello World',
          success: true,
        }
      })
    }
  }
}
