import { server } from '../../lib/server'

export default async function handler(req: any, res: any) {
  switch (req.method) {
    case 'GET': {
      return server.get(req, res, async () => {
        return {
          data: {
            message: 'Hello World',
          },
          success: true,
        }
      })
    }
  }
}
