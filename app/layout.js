import Link from 'next/link'
import FormComponent from './Components/FormComponent'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
        />
      </head>
      <body>
        <Link href={'/'}> Home</Link>
        <h1>Buscar Pelicula</h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FormComponent/>
        </div>
        {children}
      </body>
    </html>
  )
}