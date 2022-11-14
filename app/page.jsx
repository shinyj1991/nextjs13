import Link from 'next/link'
import LayoutHeader from '../components/Layout/Header'
import LayoutFooter from '../components/Layout/Footer'

export default async () => {
  return (
    <div className="page-index">
      <LayoutHeader />

      <main className="container">
        <Link href="/todo">Todo</Link>
      </main>

      <LayoutFooter />
    </div>
  )
}
