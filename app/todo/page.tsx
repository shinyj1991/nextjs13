import Link from 'next/link'
import { client } from '../../lib/client'
import './page.scss'

import TodoRegister from '../../components/Todo/Register'
import TodoItem from '../../components/Todo/Item'

export default async () => {
  const res = await client.get(`/api/todo`, {
    page: 1,
  })

  return (
    <div className="todo-page">
      <div className="head">
        <Link href="/">&lt; go home</Link>
        <h1>To do list</h1>
      </div>
      <div className="todo-list">
        {res.success ? (
          <ul>
            {res.data.map((item: any, index: any) => (
              <TodoItem key={item._id} item={item} />
            ))}
          </ul>
        ) : (
          <div className="empty">{JSON.stringify(res)}</div>
        )}
      </div>
      <TodoRegister />
    </div>
  )
}
