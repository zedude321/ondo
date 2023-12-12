import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-screen h-screen bg-white dark:bg-dark-bg flex items-center flex-col'>
      <div className='xl:w-xl 2xl:w-2xl w-[95%]'>
        <Header />
      </div>
      <Footer />
    </div>
  )
}
