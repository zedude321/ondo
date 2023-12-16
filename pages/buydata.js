import Logo from "@/components/logo";
import Logos from "@/components/logos";
import { useEffect, useState } from "react";

export default function BuyData () {
    const [visible, setVisible] = useState(true);
    const [tab, setTab] = useState(0);
    const [data, setData] = useState(null);
    const [number, setNumber] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [price, setPrice] = useState('');
    const [active, setActive] = useState(false); // for input

    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.scrollY
           
           setVisible(50 > moving);
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

    const cls = visible ? "top-0" : "top-[-100%]";

    return (
        <div className='bg-white dark:bg-dark-bg flex items-center flex-col overflow-x-hidden min-h-screen'>
            {/* Header */}
            <div className={" fixed z-50 dark:bg-dark-bg bg-white w-full flex justify-center border-b border-off-white"}>
                <div className='xl:w-xl 2xl:w-2xl w-[95%]'>
                    {/* Traditional header */}
                    <div className={cls + " xl:w-xl 2xl:w-2xl w-[95%] transition-all absolute h-14 sm:h-16 md:h-[5.5rem] flex items-center justify-between dark:text-white"}>
                        <Logo />
                        <div className="flex items-center gap-6 font-semibold text-sm md:text-md">
                            <a href="/login" className="flex gap-2 hover:border-black border-off-white dark:bg-dark-bg py-1 p-2 rounded-lg items-center border cursor-pointer dark:hover:border-light-gray hover:brightness-200 transition-all border-box">
                                <Logos logo='account' />
                                Нэвтрэх
                            </a>
                        </div>
                    </div>
                    {/* Indicator */}
                    <div className={`${visible && 'mt-14 sm:mt-16 md:mt-[5.5rem]'} transition-all flex w-full relative justify-center`}>
                        <div className="basis-1/3 flex flex-col w-fit text-white justify-center items-center p-4 gap-3 text-sm z-10">
                            <div className="p-2 dark:bg-dark-bg">
                                <div className="bg-pink h-6 w-6 rounded-full flex justify-center items-center">1</div>
                            </div>
                            <p className="dark:text-white text-black text-center">Дата сонгох</p>
                        </div>
                        <div className="basis-1/3 flex flex-col w-fit text-white justify-center items-center p-4 gap-3 text-sm z-10">
                            <div className="p-2 dark:bg-dark-bg">
                                <div className={`${tab > 0 ? 'bg-pink' : 'dark:bg-off-white bg-light-gray'} h-6 w-6 rounded-full flex justify-center items-center`}>2</div>
                            </div>
                            <p className="text-dark-gray text-center">Дугаар сонгох</p>
                        </div>
                        <div className="basis-1/3 flex flex-col w-fit text-white justify-center items-center p-4 gap-3 text-sm z-10">
                            <div className="p-2 dark:bg-dark-bg">
                                <div className={`${tab > 1 ? 'bg-pink' : 'dark:bg-off-white bg-light-gray'} h-6 w-6 rounded-full flex justify-center items-center`}>3</div>
                            </div>
                            <p className="text-dark-gray text-center">Төлбөр төлөх</p>
                        </div>
                        <div className="absolute w-2/3 h-[2px] top-[35px] flex">
                            <div className={`${tab > 0 ? 'bg-pink' : 'bg-off-white'} w-1/2 h-full`}></div>
                            <div className={`${tab > 1 ? 'bg-pink' : 'bg-off-white'} w-1/2 h-full`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xl:w-xl 2xl:w-2xl w-[95%] h-max overflow-x-hidden overflow-y-clip mt-52'>
                {/* Tab 1 */}
                <div className='flex flex-col gap-4'>
                    <div className="cursor-pointer" onClick={() => setTab(0)}>
                        <h1 className="dark:text-white text-2xl font-bold">1. Дата багц авах</h1>
                        <p className="dark:text-white text-sm">{data && "Дата багц: " + data}</p>
                    </div>

                    <div className={`${tab != 0 && 'hidden'}`}>
                        {/* Undsen data part */}
                        <div className="w-full rounded-3xl overflow-hidden border border-off-white dark:text-white mb-10">
                            <div className="w-full bg-pink p-6 bg-gradient">
                                <h1 className="text-3xl font-bold text-white">Үндсэн дата</h1>
                            </div>
                            {/* Columns */}
                            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <p className="font-bold text-lg sm:order-1">Шилжүүлэх боломжтой хугацаагүй багцууд</p>
                                <div onClick={() => {setData('12GB'); setTab(1); setPrice("7'000 ₮")}} className="grid grid-cols-2 gap-4 sm:order-3 w-full dark:border border-off-white shadow-lg rounded-3xl p-6 cursor-pointer hover:bg-off-white transition-all duration-300">
                                    <div className="flex flex-col justify-between w-full">
                                        <h1 className="font-bold text-3xl">12GB</h1>
                                        <p className="text-pink mt-2">Хугацаагүй, шилжүүлэх боломжтой</p>
                                    </div>
                                    <div className="flex flex-col justify-between w-full items-end">
                                        <p className="font-bold dark:text-light-gray text-dark-gray text-xl">7'000 ₮</p>
                                        <button className="dark:bg-off-white px-2 rounded-lg w-fit hover:dark:bg-dark-gray hover:bg-off-white transition duration-300">Цэнэглэх</button>
                                    </div>
                                </div>
                                <div onClick={() => {setData('35GB'); setTab(1); setPrice("17'000 ₮")}} className="grid grid-cols-2 gap-4 sm:order-5 w-full dark:border border-off-white shadow-lg rounded-3xl p-6 cursor-pointer hover:bg-off-white transition-all duration-300">
                                    <div className="flex flex-col justify-between w-full">
                                        <h1 className="font-bold text-3xl">35GB</h1>
                                        <p className="text-pink mt-2">Хугацаагүй, шилжүүлэх боломжтой</p>
                                    </div>
                                    <div className="flex flex-col justify-between w-full items-end">
                                        <p className="font-bold dark:text-light-gray text-dark-gray text-xl">17'000 ₮</p>
                                        <button className="dark:bg-off-white px-2 rounded-lg w-fit hover:dark:bg-dark-gray hover:bg-off-white transition duration-300">Цэнэглэх</button>
                                    </div>
                                </div>
                                <div onClick={() => {setData('111GB'); setTab(1); setPrice("50'000 ₮")}} className="grid grid-cols-2 gap-4 sm:order-7 w-full dark:border border-off-white shadow-lg rounded-3xl p-6 cursor-pointer hover:bg-off-white transition-all duration-300">
                                    <div className="flex flex-col justify-between w-full">
                                        <h1 className="font-bold text-3xl">111GB</h1>
                                        <p className="text-pink mt-2">Хугацаагүй, шилжүүлэх боломжтой</p>
                                    </div>
                                    <div className="flex flex-col justify-between w-full items-end">
                                        <p className="font-bold dark:text-light-gray text-dark-gray text-xl">50'000 ₮</p>
                                        <button className="dark:bg-off-white px-2 rounded-lg w-fit hover:dark:bg-dark-gray hover:bg-off-white transition duration-300">Цэнэглэх</button>
                                    </div>
                                </div>
                                <p className="font-bold text-lg sm:order-2">Хурд, хэмжээ хязгааргүй багцууд</p>
                                <div onClick={() => {setData('36 хоног'); setTab(1); setPrice("30'000 ₮")}} className="grid grid-cols-2 gap-4 sm:order-4 w-full dark:border border-off-white shadow-lg rounded-3xl p-6 cursor-pointer hover:bg-off-white transition-all duration-300">
                                    <div className="flex flex-col justify-between w-full">
                                        <h1 className="font-bold text-3xl">36 хоног</h1>
                                        <p className="text-pink mt-2">Хурд, хэмжээ хязгааргүй</p>
                                    </div>
                                    <div className="flex flex-col justify-between w-full items-end">
                                        <p className="font-bold dark:text-light-gray text-dark-gray text-xl">30'000 ₮</p>
                                        <button className="dark:bg-off-white px-2 rounded-lg w-fit hover:dark:bg-dark-gray hover:bg-off-white transition duration-300">Цэнэглэх</button>
                                    </div>
                                </div>
                                <div onClick={() => {setData('16 хоног'); setTab(1); setPrice("15'000 ₮")}} className="grid grid-cols-2 gap-4 sm:order-6 w-full dark:border border-off-white shadow-lg rounded-3xl p-6 cursor-pointer hover:bg-off-white transition-all duration-300">
                                    <div className="flex flex-col justify-between w-full">
                                        <h1 className="font-bold text-3xl">16 хоног</h1>
                                        <p className="text-pink mt-2">Хурд, хэмжээ хязгааргүй</p>
                                    </div>
                                    <div className="flex flex-col justify-between w-full items-end">
                                        <p className="font-bold dark:text-light-gray text-dark-gray text-xl">15'000 ₮</p>
                                        <button className="dark:bg-off-white px-2 rounded-lg w-fit hover:dark:bg-dark-gray hover:bg-off-white transition duration-300">Цэнэглэх</button>
                                    </div>
                                </div>
                                <div onClick={() => {setData('6 хоног'); setTab(1); setPrice("6'000 ₮")}} className="grid grid-cols-2 gap-4 sm:order-8 w-full dark:border border-off-white shadow-lg rounded-3xl p-6 cursor-pointer hover:bg-off-white transition-all duration-300">
                                    <div className="flex flex-col justify-between w-full">
                                        <h1 className="font-bold text-3xl">6 хоног</h1>
                                        <p className="text-pink mt-2">Хурд, хэмжээ хязгааргүй</p>
                                    </div>
                                    <div className="flex flex-col justify-between w-full items-end">
                                        <p className="font-bold dark:text-light-gray text-dark-gray text-xl">6'000 ₮</p>
                                        <button className="dark:bg-off-white px-2 rounded-lg w-fit hover:dark:bg-dark-gray hover:bg-off-white transition duration-300">Цэнэглэх</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Zadgai data part */}
                        <div className="w-full rounded-3xl overflow-hidden border border-off-white dark:text-white">
                            <div className="w-full bg-pink p-6 bg-gradient">
                                <h1 className="text-3xl text-white font-bold">Задгай дата</h1>
                            </div>
                            <div className="p-6 w-full">
                                <div className="flex flex-col gap-3 w-full dark:border border-off-white shadow-lg rounded-3xl p-6">
                                    <div className="flex justify-between w-full">
                                        <div>
                                            <h1 className="font-bold text-3xl">2GB</h1>
                                            <p className="text-pink mt-2">Хугацаагүй</p>
                                        </div>
                                        <p className="font-bold dark:text-light-gray text-dark-gray text-xl">1'500 ₮</p>
                                    </div>
                                    <div className="flex flex-col justify-between w-full items-end">
                                        <button className="dark:bg-dark-content p-2 px-12 sm:w-fit w-full rounded-lg hover:bg-off-white transition-all duration-300">Цэнэглэх</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] my-4 bg-off-white"></div>
                {/* Tab 2 */}
                <div className='flex flex-col gap-4'>
                    <div className="cursor-pointer" onClick={() => setTab(1)}>
                        <h1 className={`${tab < 1 ? 'text-dark-gray' : 'dark:text-white'} text-2xl font-bold`}>2. Дугаар сонгох</h1>
                        <p className="dark:text-white text-sm">{number && "Цэнэглэх дугаар: " + number}</p>
                    </div>

                    <div className={`${tab != 1 && 'hidden'} dark:bg-dark-content shadow-lg p-6 rounded-3xl`}>
                        <div className="flex gap-4 flex-col sm:flex-row">
                            <div className="w-full relative flex items-center">
                                <label className={`${(active || inputValue) ? 'dark:text-white font-bold text-xs -translate-y-[25px]' : 'text-sm dark:text-dark-gray text-light-gray'} bg-white dark:bg-dark-content transition-all ml-2 p-1 absolute hover:cursor-text`} for='number'>Бүртгэлтэй эсвэл ONDO дугаар</label>
                                <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} onFocus={() => setActive(true)} onBlur={() => setActive(false)} id='number' className="z-5 focus:dark:outline-white focus:outline-black focus:outline-2 hover:outline-black hover:dark:outline-white text-sm transition-all outline-none bg-transparent w-full p-3 rounded-md dark:text-white text-black outline outline-1 outline-off-white" />
                            </div>
                            <button onClick={() => {setNumber(inputValue); setTab(2); setInputValue('')}} className="bg-white p-2 px-16 font-bold rounded-xl hover:opacity-70 transition-all duration">Сонгох</button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] my-4 bg-off-white"></div>
                {/* Tab 3 */}
                <div className='flex flex-col gap-4'>
                    <div className="cursor-pointer" onClick={() => setTab(1)}>
                        <h1 className={`${tab < 2 ? 'text-dark-gray' : 'dark:text-white'} text-2xl font-bold`}>3. Төлбөр төлөх</h1>
                    </div>

                    <div className={`${tab != 2 && 'hidden'} dark:bg-dark-content shadow-lg rounded-3xl max-w-[900px]`}>
                        <div className="flex gap-4 flex-col">
                            <h1 className="dark:text-white text-lg font-bold pl-4 pt-4">Худалдан авалтын мэдээлэл</h1>
                            <div className="w-full h-[1px] bg-off-white"></div>
                            <div className="flex justify-between px-4">
                                <div className="flex flex-col gap-10">
                                    <p className="dark:text-light-gray text-dark-gray font-semibold text-sm">Бүтээгдэхүүн</p>
                                    <div className="flex gap-4 items-center">
                                        <div className="bg-white h-16 w-16 justify-center items-center rounded-xl hidden sm:flex">
                                            <Logos className='!text-dark-gray h-8 w-8' logo={'card'} />
                                        </div>
                                        <div>
                                            <h1 className="font-bold dark:text-white text-sm">{data}</h1>
                                            <p className="text-dark-gray text-sm">Хугацаагүй, шилжүүлэх боломжтой</p>
                                        </div>
                                    </div>
                                    <p className="dark:text-white font-semibold text-sm">Хямдрал</p>
                                </div>
                                <div className="flex flex-col gap-10 items-end">
                                    <p className="dark:text-light-gray text-dark-gray font-semibold text-sm">Ширхэг</p>
                                    <div className="h-16 flex justify-center items-center">
                                        <div className="p-1 flex justify-center w-12 sm:w-32 dark:text-white rounded-xl border border-off-white">
                                            1
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10 items-end">
                                    <p className="dark:text-light-gray text-dark-gray font-semibold text-sm">Үнэ</p>
                                    <div className="h-16 flex items-center">
                                        <p className="dark:text-white text-sm">{price}</p>
                                    </div>
                                    <p className="dark:text-white font-semibold text-sm">0 %</p>
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-off-white"></div>
                            <div className="flex justify-between items-center w-full px-6 mb-4">
                                <h1 className="dark:text-white text-lg font-bold">Нийт</h1>
                                <div className="flex items-end flex-col">
                                    <h1 className="dark:text-white text-lg font-bold">{price}</h1>
                                    <p className="dark:text-light-gray text-dark-gray text-sm">(НӨАТ орсон)</p>
                                </div>
                            </div>
                            <div className="flex mb-6 px-6 gap-6 md:flex-row flex-col">
                                <div className="w-full relative flex items-center">
                                    <label className={`${(active || inputValue) ? 'dark:text-white font-bold text-xs -translate-y-[25px]' : 'text-sm dark:text-dark-gray text-light-gray'} bg-white dark:bg-dark-content transition-all ml-2 p-1 absolute hover:cursor-text`} for='coupon'>Купон кодтой бол оруулах</label>
                                    <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} onFocus={() => setActive(true)} onBlur={() => setActive(false)} id='coupon' className="z-5 uppercase focus:dark:outline-white focus:outline-black focus:outline-2 hover:outline-black hover:dark:outline-white text-sm transition-all outline-none bg-transparent w-full p-3 rounded-md dark:text-white text-black outline outline-1 outline-off-white" />
                                </div>
                                <button className='hover:shadow-lg transition-all duration-300 hover:shadow-pink bg-pink p-2 rounded-lg px-10 font-bold text-white'>Үргэлжлүүлэх</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] my-4 bg-off-white"></div>
            </div>
        </div>
    )
}