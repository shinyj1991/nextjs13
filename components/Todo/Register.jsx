'use client'

import { useState } from 'react'
import { client } from '../../lib/client'

export default () => {
  const [title, setTitle] = useState('')

  const onChange = (e) => {
    setTitle(e.target.value)
  }

  const registTodo = async () => {
    if (title === '') {
      alert('할 일을 입력해주세요.')
      return
    }

    const res = await client.post(`/api/todo`, {
      title: title,
    })

    console.log('component', res)
  }

  return (
    <div className="register">
      <input type="text" value={title} onChange={onChange} />
      <button type="button" className="btn-regist" onClick={registTodo}>
        추가
      </button>
    </div>
  )
}
