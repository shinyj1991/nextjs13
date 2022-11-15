import React, { useEffect } from 'react'
import Link from 'next/link'
import { client } from '../../lib/client'

export default async () => {
  const res = await client.get(`/api/todo`, {
    page: 1,
  })

  return (
    <div>
      <h1>To do list</h1>
      <p>success: {res.success ? 'true' : 'false'}</p>
      {res.success ? (
        <ul>
          {res.data.map((item: any) => (
            <li key={item._id}>
              {item._id} : {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <div>{JSON.stringify(res)}</div>
      )}
      <Link href="/">home</Link>
    </div>
  )
}
