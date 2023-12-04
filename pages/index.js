import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-screen h-screen bg-white dark:bg-dark-bg flex justify-center'>
      <div className='xl:w-xl w-[95%]'>
        <Header />

        <Footer />
      </div>
    </div>
  )
}
