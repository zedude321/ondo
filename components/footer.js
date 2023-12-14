import BrandLogos from "./brandLogos";
import SmallLogo from "./smallLogo";

export default function Footer () {
    return (
        <>
            <div className="w-[100vw] h-[1px] bg-off-white"></div>
            <div className="xl:w-xl w-[95%] mt-10 py-10 flex flex-col gap-4">
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
            </div>
        </>
    )
}