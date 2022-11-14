import Link from 'next/link'
import { client } from '../../lib/client'

export default async () => {
  const data = await client.get(`/api/todo`)

  return (
    <div>
      <h1>To do list</h1>
      <p>success: {data.success ? 'success' : data.message}</p>
      {data ? (
        <ul>
          {data.data.map((item: any) => (
            <li>
              {item._id} : {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <div>null</div>
      )}
      <Link href="/">home</Link>
    </div>
  )
}
