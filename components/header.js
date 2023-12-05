import Newspaper from "@/components/newspaper";
import Logo from "./logo";
import Phone from "@/components/phone";
import Account from "@/components/account";
import Menu from "@/components/menu";

export default function Header () {

    return (
        <div className="h-14 sm:h-16 md:h-24 flex items-center justify-between dark:text-white">
            <Logo />
            <div className="flex items-center gap-6 font-semibold text-sm md:text-md">
                <a href='/news' className="hidden md:flex gap-2 cursor-pointer hover:opacity-50 transition-all items-end mr-4">
                    <Newspaper color="white" />
                    Мэдээлэл
                </a>
                <a href="/faq" className="hidden md:flex gap-2 cursor-pointer hover:opacity-50 transition-all items-end">
                    <Phone color="white" />
                    Тусламж
                </a>
                <a href="/login" className="flex gap-2 hover:border-black border-off-white dark:bg-dark-bg py-1 p-2 rounded-lg items-center border cursor-pointer dark:hover:border-light-gray hover:brightness-200 transition-all border-box">
                    <Account color="white" />
                    Нэвтрэх
                </a>
                <div className="max-md:block hidden cursor-pointer">
                    <Menu color="white" />
                </div>
            </div>
        </div>
    )
}