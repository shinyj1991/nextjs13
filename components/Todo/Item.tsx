'use client'

import { useState } from 'react'
import { client } from '#/lib/client'

export default ({ todo }) => {
  const [isRename, setIsRename] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const updateTodo = async (_id) => {
    if (!isRename) {
      setIsRename(true)
    } else {
      if (!confirm('수정?')) return

      const { success } = await client.put(`/api/todo`, {
        _id: todo._id,
        title: title,
      })

      if (success) {
        alert('수정 완료')
        location.reload()
      }
    }
  }

  const deleteTodo = async () => {
    if (!confirm('삭제?')) return

    const { success } = await client.delete(`/api/todo`, {
      _id: todo._id,
    })

    if (success) {
      alert('삭제 완료')
      location.reload()
    }
  }

  return (
    <li>
      {isRename ? (
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      ) : (
        <div>{todo.title}</div>
      )}
      <button type="button" className="btn-update" onClick={() => updateTodo(todo._id)}>
        {isRename ? '저장' : '수정'}
      </button>
      <button type="button" className="btn-delete" onClick={deleteTodo}>
        삭제
      </button>
    </li>
  )
}
