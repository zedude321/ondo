import BrandLogos from "./brandLogos";
import SmallLogo from "./smallLogo";

export default function Footer () {
    return (
        <>
            <div className="w-[100vw] h-[1px] dark:bg-dark-gray bg-off-white"></div>
            <div className="xl:w-xl 2xl:w-2xl w-[95%] mt-10 py-10 flex flex-col gap-4">
                {/* Main Footer */}
                <div className="flex justify-between gap-5 flex-col md:flex-row items-center md:items-start">
                    {/* Left Side Logos and Buttons */}
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <SmallLogo className="ml-2" />
                        <div className="flex gap-2">
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
                        <button className="justify-center md:justify-start mt-2 items-center gap-2 hover:opacity-75 transition-all dark:bg-white bg-dark-bg md:w-fit w-[75vw] p-3 px-4 dark:text-dark-bg text-white flex text-sm md:text-xs rounded-2xl">
                            <BrandLogos className="w-5 h-5 dark:!text-dark-bg !text-white" brand="apple" /> 
                            Appstore оос ONDO app татах
                        </button>
                        <button className="justify-center md:justify-start mt-2 items-center gap-2 hover:opacity-75 transition-all dark:bg-white bg-dark-bg md:w-fit w-[75vw] p-3 px-4 dark:text-dark-bg text-white flex text-sm md:text-xs rounded-2xl">
                            <BrandLogos className="w-5 h-5 dark:!text-dark-bg !text-white" brand="playstore" /> 
                            Appstore оос ONDO app татах
                        </button>
                    </div>
                    {/* Right Side text */}
                    <div className="flex gap-10 flex-col md:flex-row">
                        <div className="flex flex-col justify-start gap-3 lg:w-44 md:w-32 w-full">
                            <p className="text-black dark:text-white font-bold text-sm md:text-xs text-center md:text-left">ONDO</p>
                            <a href="/" className="text-black dark:text-white text-sm md:text-xs hover:underline text-center md:text-left">Бидний тухай</a>
                            <a href="/" className="text-black dark:text-white text-sm md:text-xs hover:underline text-center md:text-left">Хамрах хүрээ</a>
                            <a href="/" className="text-black dark:text-white text-sm md:text-xs hover:underline text-center md:text-left">Хүний нөөц</a>
                            <a href="/" className="text-black dark:text-white text-sm md:text-xs hover:underline text-center md:text-left">Тусламж</a>
                        </div>
                        <div className="flex flex-col justify-start gap-3 lg:w-44 md:w-32 w-full">
                            <p className="text-black dark:text-white font-bold text-sm md:text-xs text-center md:text-left">ДҮРЭМ ЖУРАМ</p>
                            <a href="/" className="text-black dark:text-white text-sm md:text-xs hover:underline text-center md:text-left">Үйлчилгээний нөхцөл</a>
                            <a href="/" className="text-black dark:text-white text-sm md:text-xs hover:underline text-center md:text-left">Нууцлалын бодлого</a>
                        </div>
                        <div className="flex flex-col justify-start gap-3 lg:w-44 md:w-32 w-full">
                            <p className="text-black dark:text-white font-bold text-sm md:text-xs text-center md:text-left">ХОЛБОО БАРИХ</p>
                            <a href="/" className="text-black dark:text-white text-sm md:text-xs hover:underline text-center md:text-left">info@ondo.mn</a>
                            <a href="/" className="text-black dark:text-white text-sm md:text-xs hover:underline text-center md:text-left">6666 (Ондо дугаараас)</a>
                            <a href="/" className="text-black dark:text-white text-sm md:text-xs hover:underline text-center md:text-left">1800-6666 (Бусад сүлжээ)</a>
                            <a href="/" className="text-black dark:text-white text-sm md:text-xs hover:underline text-center md:text-left">Салбарын хаяг: Сүхбаатар дүүрэг, 5-р хороо, Нью Майнд Оффис, 1 давхар.</a>
                            <a href="/" className="text-black dark:text-white text-sm md:text-xs hover:underline text-center md:text-left">Оффис: Сүхбаатар дүүрэг, 1-р хороо, Олимпын гудамж, Нью Хоризонс Оффис, 2 давхар, 201</a>
                        </div>
                    </div>
                </div>
                <p className="dark:text-light-gray text-black mt-10 hidden md:flex">© 2023. Бүх эрх хуулиар хамгаалагдсан ОНДО ХХК</p>
            </div>
        </>
    )
}