import Header from '@/components/header'
import Footer from '@/components/footer'
import Card from '@/components/card'
import {useRouter} from "next/router"

export default function News() {
  const router = useRouter();

  return (
    <div className='bg-white dark:bg-dark-bg flex items-center flex-col overflow-x-hidden'>
      <Header />  
        <div className='xl:w-xl 2xl:w-2xl w-[95%] overflow-x-hidden h-max overflow-y-clip'>
          <div className='mt-10 mb-20'>
            <div className='flex justify-between mb-8 mt-15'>
              <h1 className='font-bold text-2xl dark:text-white'>Мэдээлэл</h1>
            </div>
            {/* <div className="carousel relative"> */}
            {/* carousel-slide absolute ease-in-out */}
                <div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid gap-6'>
                  <Card tags={['Мэдэгдэл']} date='2023 оны 11-р сарын 26' title='ONDO ирээдүйг ОЛУУЛАА' img='https://cdn.ondo.mn/strapi/Ondo_LLC_Web_Banner_1faa3ee8a4.jpg' />
                  <Card tags={['Дуудлага', 'Блог']} date='2023 оны 11-р сарын 16' title='VoWifi тохиргоог хэрхэн идэвхжүүлэх вэ?' img='https://cdn.ondo.mn/strapi/image_2023_11_16_12_51_48_81d62c0014.png' />
                  <Card tags={['Арга Хэмжээ', 'Дуудлага', 'Мэдэгдэл']} date='2023 оны 11-р сарын 11' title='Дуудлага хийх дараа үеийн, хамгийн дэвшилтэт...' img='https://cdn.ondo.mn/strapi/IMG_0117_2c4475f875.jpg' />
                  <Card tags={['Дата', 'Блог']} date='2023 оны 11-р сарын 06' title='Хамгийн ихээр дата үрэгддэг апп?' img='	https://cdn.ondo.mn/strapi/batoyuna_pink_light_c256f441_b3aa_4440_80f7_304d3b50f437_c56104bfff.png' />
                  <Card tags={['Дата']} date='2023 оны 10-р сарын 25' title='eSIM яаж суулгах вэ?' img='https://cdn.ondo.mn/strapi/Login_or_Register_f7e34cbc97.webp' />
                  <Card tags={['Блог']} date='2023 оны 10-р сарын 24' title='ONDO гэр бүлд тавтай морил' img='https://cdn.ondo.mn/strapi/About_us_04_ca6ea269df.jpg' />
                  <Card tags={['Дата', 'Блог']} date='2023 оны 10-р сарын 19' title='Шинэ хэрэглэгчдэдээ зориулав' img='https://cdn.ondo.mn/strapi/Home_news_01_73dba78907.jpg' />
                  <Card tags={['Дата']} date='2023 оны 10-р сарын 01' title='Танд ямар дата тохирох вэ?' img='https://cdn.ondo.mn/strapi/About_us_03_c3f332c4bb.jpg' />
                  <Card tags={['Мэдээлэл']} date='2023 оны 9-р сарын 15' title='Хэрэглэгчдийн анхааралд' img='https://cdn.ondo.mn/strapi/image_2023_11_17_11_17_51_b95dc34a6a.png' />
                  <Card tags={['Арга Хэмжээ', 'Дата']} date='2023 оны 8-р сарын 31' title='DURAARAA DATA урамшууллын хугацаа...' img='https://cdn.ondo.mn/strapi/337657113_233642815812056_3983303942091985461_n_1e90912d8f.jpg' />
                </div>
                {/* <div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid gap-6 carousel-slide absolute transition-opacity ease-in-out duration-500'> */}
                {/* </div> */}
            {/* </div> */}
    
            {/* <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button> */}
          </div>
        </div>
      <Footer />
    </div>
  )
}