'use client'

import { useState } from 'react'
import { client } from '../../lib/client'

export default ({ item }) => {
  const deleteTodo = async (_id) => {
    if (!confirm('삭제?')) return

    const { success } = await client.delete(`/api/todo`, {
      _id: _id,
    })

    console.log(success)

    if (success) {
      alert('삭제 완료')
      location.reload()
    }
  }

  return (
    <li>
      <div>{item.title}</div>
      <button type="button" className="btn-delete" onClick={() => deleteTodo(item._id)}>
        삭제
      </button>
    </li>
  )
}
