import Link from 'next/link'
import { client } from '../../lib/client'
import './page.scss'

import TodoRegister from '../../components/Todo/Register'
import TodoItem from '../../components/Todo/Item'

const getTodoList = async () => {
  const result = await client.get(`/api/todo`, {
    page: 1,
  })

  return result
}

export default async () => {
  const res = await getTodoList()

  return (
    <div className="todo-page">
      <div className="head">
        <Link href="/">&lt; go home</Link>
        <h1>To do list</h1>
      </div>
      <div className="todo-list">
        {res.success ? (
          <ul>
            {res.data.map((todo: any, index: any) => (
              <TodoItem key={todo._id} todo={todo} />
            ))}
          </ul>
        ) : (
          <div className="empty">Error : {JSON.stringify(res)}</div>
        )}
      </div>
      <TodoRegister />
    </div>
  )
}
