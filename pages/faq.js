import BrandLogos from "@/components/brandLogos";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Logos from "@/components/logos";
import {useRouter} from "next/router"

export default function FAQ () {
    const router = useRouter();

    return (
        <div className='bg-white dark:bg-dark-bg flex items-center flex-col overflow-x-hidden'>
            <Header />
            <div className='xl:w-xl 2xl:w-2xl w-[95%] overflow-x-hidden h-max overflow-y-clip'>
                <p className="text-black font-bold text-4xl mt-12 dark:text-white ">Танд ямар тусламж хэрэгтэй байна вэ?</p>
                <div className="flex gap-2 mt-12">
                    <a href="/" className="flex p-2 rounded-full justify-center items-center hover:bg-[#408ff725] transition-all">
                        <BrandLogos className="w-5 h-5" brand={"facebook"} />
                    </a>
                    <a href="/" className="flex p-2 rounded-full justify-center items-center hover:bg-[#fc239425] transition-all">
                        <BrandLogos className="w-5 h-5" brand={"instagram"} />
                    </a>
                    <a href="/" className="flex p-2 rounded-full justify-center items-center hover:bg-[#1d9dad25] transition-all">
                        <BrandLogos className="w-5 h-5" brand={"linkedin"} />
                    </a>
                </div>
                <p className="text-black font-bold text-xl mt-12 dark:text-white">Түгээмэл асуулт, хариулт</p>
                <div className="grid grid-cols-1 mt-10 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-2xl hover:bg-off-white transition-all duration-300">
                        <img className="w-1/3" src="	https://cdn.ondo.mn/strapi/oluulaa_0c7637882b.svg" />
                        <p className="dark:text-white text-black font-bold text-lg mt-6">ОЛУУЛАА</p>
                        <p1 className="dark:text-white text-black font-light text-sm mt-3 ">Оролцогч тал бүр бүтээсэн үнэ цэнээсээ ашиг хүртэх боломжтой OЛУУЛАА багц</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-2xl  hover:bg-off-white transition-all duration-300">
                        <img className="w-1/3" src="https://cdn.ondo.mn/strapi/esim_cf4c911164.svg"/>
                        <p className="dark:text-white text-black font-bold text-lg mt-6">eSIM</p>
                        <p1 className="dark:text-white text-black font-light text-sm mt-3 ">Тохиргоо</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-2xl  hover:bg-off-white transition-all duration-300">
                        <img className="w-1/3" src="	https://cdn.ondo.mn/strapi/biytsim_283b8c9d5a.svg"/>
                        <p className="dark:text-white text-black font-bold text-lg mt-6">Биет сим</p>
                        <p1 className="dark:text-white text-black font-light text-sm mt-3 ">Түгээмэл асуулт</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-2xl  hover:bg-off-white transition-all duration-300">
                        <img className="w-1/3" src="https://cdn.ondo.mn/strapi/suljee_241b895adb.svg"/>
                        <p className="dark:text-white text-black font-bold text-lg mt-6">Сүлжээ</p>
                        <p1 className="dark:text-white text-black font-light text-sm mt-3 ">Түгээмэл асуулт</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-2xl  hover:bg-off-white transition-all duration-300">
                        <img className="w-1/3" src="	https://cdn.ondo.mn/strapi/hotspot_ced7db2492.svg"/>
                        <p className="dark:text-white text-black font-bold text-lg mt-6">Hotspot</p>
                        <p1 className="dark:text-white text-black font-light text-sm mt-3 ">Тохиргоо</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-2xl  hover:bg-off-white transition-all duration-300">
                        <img className="w-1/3" src="https://cdn.ondo.mn/strapi/tulbor_01bad54dc6.svg"/>
                        <p className="dark:text-white text-black font-bold text-lg mt-6">Төлбөр</p>
                        <p1 className="dark:text-white text-black font-light text-sm mt-3 ">Түгээмэл асуулт</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-2xl  hover:bg-off-white transition-all duration-300">
                        <img className="w-1/3" src="https://cdn.ondo.mn/strapi/uramshuulal_78508fde62.svg"/>
                        <p className="dark:text-white text-black font-bold text-lg mt-6">Урамшуулал</p>
                        <p1 className="dark:text-white text-black font-light text-sm mt-3 ">Мэдээлэл</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-2xl  hover:bg-off-white transition-all duration-300">
                        <img className="w-1/3" src="https://cdn.ondo.mn/strapi/bairshil_9b18caa68a.svg"/>
                        <p className="dark:text-white text-black font-bold text-lg mt-6">Хаяг байршил</p>
                        <p1 className="dark:text-white text-black font-light text-sm mt-3 ">Түгээмэл асуулт</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-2xl  hover:bg-off-white transition-all duration-300">
                        <img className="w-1/3" src="https://cdn.ondo.mn/strapi/dugaar_be335915bc.svg"/>
                        <p className="dark:text-white text-black font-bold text-lg mt-6">Дугаар</p>
                        <p1 className="dark:text-white text-black font-light text-sm mt-3 ">Тохиргоо</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-xl  hover:bg-off-white transition-all duration-300">
                        <img className="w-1/3" src="https://cdn.ondo.mn/strapi/data_4c0ef87878.svg"/>
                        <p className="dark:text-white text-black font-bold text-lg mt-6">ДАТА</p>
                        <p1 className="dark:text-white text-black font-light text-sm mt-3 ">Түгээмэл асуулт</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-xl  hover:bg-off-white transition-all duration-300">
                        <img className="w-1/3" src="https://cdn.ondo.mn/strapi/tohirgoo_760579ab43.svg"/>
                        <p className="dark:text-white text-black font-bold text-lg mt-6">Тохиргоо</p>
                        <p1 className="dark:text-white text-black font-light text-sm mt-3 ">APN, Volte, Hotspot</p1>
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <div className="p-6 rounded-2xl bg-white dark:bg-dark-content flex flex-col sm:flex-row items-center justify-evenly mt-20 shadow-xl max-w-[900px] gap-4">
                        <img className="w-32 h-32" src="https://ondo.mn/assets/illustrations/dashboard/report.svg"/>
                        <div className="flex-col flex h-full gap-2 w-full sm:w-2/3 items-center sm:items-start">
                            <p className="dark:text-white text-black font-bold text-lg text-center sm:text-start">Таны хайсан зүйл байхгүй байна уу?</p>
                            <p className="dark:text-white text-black text-sm text-center sm:text-start">Таны авахыг хүссэн мэдээлэл манай тусламж хэсэгт байгаагүй бол бидэнд санал илгээж мэдэгдээрэй.</p> 
                            <button className="bg-dark-gray bg-opacity-10 hover:bg-opacity-50 duration-300 transition-all rounded-lg p-1 px-10 w-fit text-black dark:text-white font-bold text-sm">Мэдэгдэх</button>
                        </div>
                    </div>
                </div>
                <p className="text-black font-bold text-xl mt-20 dark:text-white ">Холбоо барих</p>
                <div className="grid grid-cols-1 gap-4 mt-10  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 mb-20">
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-xl  hover:bg-off-white transition-all duration-300">
                        <div className="rounded-full w-16 h-16 b bg-slate-100 dark:bg-off-white flex justify-center items-center">
                            <Logos className='h-8 w-8' logo={'chat'} />
                        </div>
                        <p className="text-black font-semibold text-xl mt-12 dark:text-white">Мессэж илгээх</p>
                        <p1 className="text-dark-gray font-light text-sm mt-5">Facebook мессэнжерээр холбогдох</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-xl  hover:bg-off-white transition-all duration-300">
                        <div className="rounded-full w-16 h-16 b bg-slate-100 dark:bg-off-white flex justify-center items-center">
                            <Logos className='h-8 w-8' logo={'phone'} />
                        </div>
                        <p className="text-black font-semibold text-xl mt-12 dark:text-white">Дуудлагын төв</p>
                        <p1 className="text-dark-gray font-light text-sm mt-3 ">1800-6666 залгах (Энгийн ярианы тарифаар тооцогдоно.)</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-xl  hover:bg-off-white transition-all duration-300">
                        <div className="rounded-full w-16 h-16 b bg-slate-100 dark:bg-off-white flex justify-center items-center">
                            <Logos className='h-8 w-8' logo={'heart'} />
                        </div>
                        <p className="text-black font-semibold text-xl mt-12 dark:text-white">Хаяг байршил</p>
                        <p1 className="text-dark-gray font-light text-sm mt-3 ">Сүхбаатар дүүрэг, 5-р хороо, Нью Майнд Оффис, 1 давхар.</p1>
                    </a>
                    <a className="cursor-pointer w-full p-6 rounded-lg bg-white dark:bg-dark-content flex items-center justify-center flex-col text-center shadow-xl  hover:bg-off-white transition-all duration-300">
                        <div className="rounded-full w-16 h-16 bg-slate-100 dark:bg-off-white flex justify-center items-center">
                        <Logos className='h-8 w-8' logo={'mail'} />
                        </div>
                        <p className="text-black font-semibold text-xl mt-12 dark:text-white">Санал хүсэлт</p>
                        <p1 className="text-dark-gray font-light text-sm mt-3 ">Вэб ба апп дээр санал хүсэлт болон алдааг мэдэгдэх</p1>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}