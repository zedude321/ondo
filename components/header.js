import { useRouter } from "next/router";
import Logo from "./logo";
import Logos from "./logos";

export default function Header () {
    const router = useRouter();

    return (
        <>
            <div className='xl:w-xl 2xl:w-2xl w-[95%] fixed z-50 dark:bg-dark-bg bg-white'>
                <div className="h-14 sm:h-16 md:h-[5.5rem] w-full flex items-center justify-between dark:text-white">
                    <Logo />
                    <div className="flex items-center gap-6 font-semibold text-sm md:text-md">
                        <a onClick={() => router.push('/news')} className="hidden md:flex gap-2 cursor-pointer hover:opacity-50 transition-all items-end mr-4">
                            <Logos logo='newspaper' />
                            Мэдээлэл
                        </a>
                        <a onClick={() => router.push('/faq')} className="hidden md:flex gap-2 cursor-pointer hover:opacity-50 transition-all items-end">
                            <Logos logo='phone' />
                            Тусламж
                        </a>
                        <a onClick={() => router.push('/login')} className="flex gap-2 hover:border-black border-off-white dark:bg-dark-bg py-1 p-2 rounded-lg items-center border cursor-pointer dark:hover:border-light-gray hover:brightness-200 transition-all border-box">
                            <Logos logo='account' />
                            Нэвтрэх
                        </a>
                        <div className="max-md:block hidden cursor-pointer">
                            <Logos logo='menu' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-14 sm:h-16 md:h-[5.5rem]"></div>
        </>
    )
}