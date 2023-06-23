import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Analytics from '@/components/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Tristan Felizarta',
    description:
        'A passionate React developer dedicated to building outstanding web applications.'
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={inter.className}>
            <body>{children}</body>
            <Analytics />
        </html>
    )
}

export default Layout
