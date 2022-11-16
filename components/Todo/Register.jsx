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

    const { success } = await client.post(`/api/todo`, {
      title: title,
    })

    if (success) {
      alert('등록 완료')
      setTitle('')
      location.reload()
    } else {
      alert('등록 오류')
    }
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
