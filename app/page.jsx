import Link from 'next/link'
import LayoutHeader from '../components/Layout/Header'

async function getData() {
  const res = await fetch(`${process.env.NEXT_API_ENTRY}/api/hello`)
  return res.json()
}

export default async function Page() {
  const { message } = await getData()

  return (
    <div className="index-page">
      <p>index page</p>
      <Link href="/todo">todo</Link>
    </div>
  )
}
