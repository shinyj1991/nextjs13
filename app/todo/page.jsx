import Link from 'next/link'

async function getData() {
  const res = await fetch(`${process.env.NEXT_API_ENTRY}/api/todo`)
  return res.json()
}

export default async () => {
  const { success, data, message } = await getData()

  return (
    <div>
      <h1>To do list</h1>
      <p>success: {success ? 'success' : message}</p>
      {data ? (
        <ul>
          {data.map((item) => (
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
