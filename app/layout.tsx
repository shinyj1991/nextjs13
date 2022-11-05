export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <div>
          <p>root layout</p>
          {children}
        </div>
      </body>
    </html>
  )
}
