import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'MK Korsęk - Meble na wymiar | Kuchnie | Szafy | Meble z litego drewna',
  description: 'Profesjonalna firma stolarska oferująca meble na wymiar, kuchnie, szafy oraz meble z litego drewna. Montaż i renowacja mebli w województwie pomorskim.',
  keywords: 'meble na wymiar, kuchnie na wymiar, szafy na wymiar, meble z litego drewna, stolarz pomorskie, renowacja mebli',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'MK Korsęk - Meble na wymiar | Kuchnie | Szafy | Meble z litego drewna',
    description: 'Profesjonalna firma stolarska oferująca meble na wymiar, kuchnie, szafy oraz meble z litego drewna.',
    locale: 'pl_PL',
    type: 'website',
  },
  metadataBase: new URL('https://mkkorsek.pl'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
