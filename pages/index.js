import Header from '@/components/header'
import Footer from '@/components/footer'
import Logos from '@/components/logos'
import SmallLogo from '@/components/smallLogo'
import Card from '@/components/card'

export default function Home() {
  return (
    <div className='bg-white dark:bg-dark-bg flex items-center flex-col overflow-x-hidden'>
      <Header />  
      <div className='xl:w-xl 2xl:w-2xl w-[95%] overflow-x-hidden h-max overflow-y-clip'>
        {/* Carousel */}
        <div className='w-full mt-4 overflow-hidden rounded-3xl relative'>
          <img className='' src='https://cdn.ondo.mn/strapi/6601_6610_59eaf6c4c6.jpg' />
          <button className='hover:shadow-lg transition-all duration-300 hover:shadow-pink absolute bg-pink p-2 rounded-lg px-8 bottom-6 left-6 font-bold text-white'>Авах</button>
          <div className='flex p-[2px] gap-[2px] text-white bg-dark-content rounded-lg bg-opacity-25 absolute right-6 bottom-6 items-center'>
            <p className='text-light-gray cursor-pointer hover:bg-off-white h-7 w-7 rounded-full flex justify-center transition-all items-center'>{'<'}</p>
            <p className='font-bold'>1/2</p>
            <p className='text-light-gray cursor-pointer hover:bg-off-white h-7 w-7 rounded-full flex justify-center transition-all items-center'>{'>'}</p>
          </div>
        </div>
        {/* Black buttons */}
        <div className='w-full mt-10 lg:grid flex flex-wrap grid-cols-5 rounded-lg overflow-hidden'>
          <div className='basis-1/2 p-1 lg:p-0'>
            <div className='text-xs md:text-sm lg:text-md hover:opacity-70 h-full rounded-lg lg:rounded-none transition-all bg-black text-pink flex flex-col justify-center items-center p-4 cursor-pointer gap-2 lg:border-r  border-off-white'>
              <Logos className="!text-pink h-12 w-12" logo={"share"} />
              Олуулаа багц авах
            </div>
          </div>
          <div className='basis-1/2 p-1 lg:p-0'>
            <div className='text-xs md:text-sm lg:text-md hover:opacity-70 h-full rounded-lg lg:rounded-none transition-all font-semibold text-white bg-black flex flex-col justify-center items-center p-4 cursor-pointer gap-2 lg:border-r  border-off-white'>
              <SmallLogo className="h-10 w-10 !text-white"/>
              ONDO-д бүртгүүлэх
            </div>
          </div>
          <div className='basis-1/2 p-1 lg:p-0'>
            <div className='text-xs md:text-sm lg:text-md hover:opacity-70 h-full rounded-lg lg:rounded-none transition-all font-semibold text-white bg-black flex flex-col justify-center items-center p-4 cursor-pointer gap-2 lg:border-r  border-off-white'>
              <Logos className="h-10 w-10 !text-white" logo='card'/>
              Дата цэнэглэх
            </div>
          </div>
          <div className='basis-1/2 p-1 lg:p-0'>
            <div className='text-xs md:text-sm lg:text-md hover:opacity-70 h-full rounded-lg lg:rounded-none transition-all font-semibold text-white bg-black flex flex-col justify-center items-center p-4 cursor-pointer gap-2 lg:border-r  border-off-white'>
              <Logos className="h-10 w-10 !text-white" logo='file'/>
              Дугаар авах
            </div>
          </div>
          <div className='w-full p-1 lg:p-0'>
            <div className='text-xs md:text-sm lg:text-md hover:opacity-70 h-full rounded-lg lg:rounded-none transition-all font-semibold text-white bg-black flex flex-col justify-center items-center p-4 cursor-pointer gap-2'>
              <Logos className="h-10 w-10 !text-white" logo='add'/>
              Дата сим авах
            </div>
          </div>
        </div>
        {/* Two images */}
        <div className='flex flex-col md:flex-row md:gap-10 mt-10 p-2'>
          <div className='relative'>
            <img className='md:rounded-xl' src='https://cdn.ondo.mn/strapi/bayarlalaa_banner_c1c84efe26.png' />
            <button className='p-1 px-2 text-sm font-bold dark:bg-white bg-dark-bg dark:text-black text-white rounded-lg transition-all absolute left-5 bottom-5 hover:opacity-75'>Идэвхжүүлэх</button>
          </div>
          <div className='relative'>
            <img className='md:rounded-xl' src='https://cdn.ondo.mn/strapi/Home_box23_629a1a682a.jpg' />
            <button className='p-1 px-2 text-sm font-bold dark:bg-white bg-dark-bg dark:text-black text-white rounded-lg transition-all absolute left-5 bottom-5 hover:opacity-75'>Дэлгэрэнгүй</button>
          </div>
        </div>
        {/* News section */}
        <div className='mt-10 mb-20'>
          <div className='flex justify-between mb-8'>
            <h1 className='font-bold text-2xl dark:text-white'>Мэдээ мэдээлэл</h1>
            <button className='dark:text-white dark:bg-dark-content p-2 rounded-lg px-4 font-bold transition-all hover:bg-off-white text-sm'>Бүгдийг харах</button>
          </div>
          <div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid gap-6'>
            <Card tags={['Мэдэгдэл']} date='2023 оны 11-р сарын 26' title='ONDO ирээдүйг ОЛУУЛАА' img='https://cdn.ondo.mn/strapi/Ondo_LLC_Web_Banner_1faa3ee8a4.jpg' />
            <Card tags={['Дуудлага', 'Блог']} date='2023 оны 11-р сарын 16' title='VoWifi тохиргоог хэрхэн идэвхжүүлэх вэ?' img='https://cdn.ondo.mn/strapi/image_2023_11_16_12_51_48_81d62c0014.png' />
            <Card tags={['Арга Хэмжээ', 'Дуудлага', 'Мэдэгдэл']} date='2023 оны 11-р сарын 11' title='Дуудлага хийх дараа үеийн, хамгийн дэвшилтэт...' img='https://cdn.ondo.mn/strapi/IMG_0117_2c4475f875.jpg' />
            <Card tags={['Дата', 'Блог']} date='2023 оны 11-р сарын 06' title='Хамгийн ихээр дата үрэгддэг апп?' img='	https://cdn.ondo.mn/strapi/batoyuna_pink_light_c256f441_b3aa_4440_80f7_304d3b50f437_c56104bfff.png' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
