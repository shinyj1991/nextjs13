import Link from 'next/link'
import LayoutHeader from '../components/Layout/Header'
import LayoutFooter from '../components/Layout/Footer'

async function getData() {
  const res = await fetch(`${process.env.NEXT_API_ENTRY}/api/hello`)
  return res.json()
}

export default async function Page() {
  const { data } = await getData()

  return (
    <div className="page-index">
      <LayoutHeader />

      <div className="container">
        <Link href="/todo">Todo</Link>
      </div>

      <LayoutFooter />
    </div>
  )
}
