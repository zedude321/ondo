import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Logos from '@/components/logos'
import SmallLogo from '@/components/smallLogo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white dark:bg-dark-bg flex items-center flex-col overflow-x-hidden'>
      <Header />  
      <div className='xl:w-xl 2xl:w-2xl w-[95%] overflow-x-hidden'>
        <div className='w-full mt-4 overflow-hidden rounded-3xl relative'>
          <img className='' src='https://cdn.ondo.mn/strapi/6601_6610_59eaf6c4c6.jpg' />
          <button className='hover:shadow-lg transition-all duration-300 hover:shadow-pink absolute bg-pink p-2 rounded-lg px-8 bottom-6 left-6 font-bold text-white'>Авах</button>
          <div className='flex p-[2px] gap-[2px] text-white bg-dark-content rounded-lg bg-opacity-25 absolute right-6 bottom-6 items-center'>
            <p className='text-light-gray cursor-pointer hover:bg-off-white h-7 w-7 rounded-full flex justify-center transition-all items-center'>{'<'}</p>
            <p className='font-bold'>1/2</p>
            <p className='text-light-gray cursor-pointer hover:bg-off-white h-7 w-7 rounded-full flex justify-center transition-all items-center'>{'>'}</p>
          </div>
        </div>
        <div className='w-full mt-4 lg:grid flex flex-wrap grid-cols-5 rounded-lg overflow-hidden'>
          <div className='basis-1/2 p-1 lg:p-0'>
            <div className='text-xs md:text-sm lg:text-md hover:opacity-70 h-full rounded-lg lg:rounded-none transition-all bg-black text-pink flex flex-col justify-center items-center p-4 cursor-pointer gap-2 lg:border-r  border-off-white'>
              <Logos className="!text-pink h-12 w-12" logo={"share"} />
              Олуулаа багц авах
            </div>
          </div>
          <div className='basis-1/2 p-1 lg:p-0'>
            <div className='text-xs md:text-sm lg:text-md hover:opacity-70 h-full rounded-lg lg:rounded-none transition-all font-semibold text-white bg-black flex flex-col justify-center items-center p-4 cursor-pointer gap-2 lg:border-r  border-off-white'>
              <SmallLogo className="h-10 w-10"/>
              ONDO-д бүртгүүлэх
            </div>
          </div>
          <div className='basis-1/2 p-1 lg:p-0'>
            <div className='text-xs md:text-sm lg:text-md hover:opacity-70 h-full rounded-lg lg:rounded-none transition-all font-semibold text-white bg-black flex flex-col justify-center items-center p-4 cursor-pointer gap-2 lg:border-r  border-off-white'>
              <Logos className="h-10 w-10" logo='card'/>
              Дата цэнэглэх
            </div>
          </div>
          <div className='basis-1/2 p-1 lg:p-0'>
            <div className='text-xs md:text-sm lg:text-md hover:opacity-70 h-full rounded-lg lg:rounded-none transition-all font-semibold text-white bg-black flex flex-col justify-center items-center p-4 cursor-pointer gap-2 lg:border-r  border-off-white'>
              <Logos className="h-10 w-10" logo='file'/>
              Дугаар авах
            </div>
          </div>
          <div className='w-full p-1 lg:p-0'>
            <div className='text-xs md:text-sm lg:text-md hover:opacity-70 h-full rounded-lg lg:rounded-none transition-all font-semibold text-white bg-black flex flex-col justify-center items-center p-4 cursor-pointer gap-2'>
              <Logos className="h-10 w-10" logo='add'/>
              Дата сим авах
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
