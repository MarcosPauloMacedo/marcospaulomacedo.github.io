import Script from '../../public/Script'
import { Poppins, Quicksand } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './global.css'

export const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: '400'})

export const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
  weight: '400'})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Script />
      </body>
    </html>
  )
}
