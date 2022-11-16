'use client'

import { client } from '../../lib/client'

export default ({ todo }) => {
  const deleteTodo = async (_id) => {
    if (!confirm('삭제?')) return

    const { success } = await client.delete(`/api/todo`, {
      _id: _id,
    })

    if (success) {
      alert('삭제 완료')
      location.reload()
    }
  }

  return (
    <li>
      <div>{todo.title}</div>
      <button type="button" className="btn-delete" onClick={() => deleteTodo(todo._id)}>
        삭제
      </button>
    </li>
  )
}
