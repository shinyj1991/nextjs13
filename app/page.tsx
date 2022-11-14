import Link from 'next/link'

export default async () => {
  return (
    <div className="index-page">
      <p>index page</p>
      <Link href="/todo">todo</Link>
    </div>
  )
}
