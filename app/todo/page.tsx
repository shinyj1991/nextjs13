import Link from 'next/link'
import { client } from '../../lib/client'
import './page.scss'
import TodoRegister from '../../components/Todo/Register'

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
            {res.data.map((item: any) => (
              <li key={item._id}>
                <div>{item.title}</div>
                <button type="button" className="btn-delete">
                  삭제
                </button>
              </li>
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
