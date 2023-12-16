import Logo from '@/components/logo'
export default function Login () {
    return (
        <div className="w-full h-screen flex items-start">
            <div className="relative w-2/3 h-full flex flex-col">
            <img src='https://cdn.ondo.mn/strapi/Login_01_0ae99c2a80.jpg' className="h-full object-contain"/>
            </div>
            <div className='w-1/3 h-full  flex flex-col p-10 justify-between'>
            <Logo /> 
            <div className='w-full flex flex-col'>
                <h3 className='text-2xl font-bold mb-4'>Нэвтрэх эсвэл бүртгүүлэх</h3>
                <p className='text-sm mb-2'>Та нэвтрэх бол өөрийн бүртгүүлсэн дугаараа оруулна уу. Бүртгүүлэх бол өөрийн нэр дээрх дугаараа ашиглана уу.</p>
            </div>
            <div className='w-full flex flex-col'>
                <input
                type="Утасны дугаар"
                placeholder="Утасны дугаар"
                className='w-full text-black py-4 border-solid border rounded-md border-black-300 outline-2 focus:outline-none' />
            </div>
            <div className='w-full flex flex-col my-2'>
                <button className='w-full text-white bg-[#060606] rounded-md p-4 text-center flex items-center justify-center '>Үргэлжлүүлэх</button>
            </div>
            </div>
        </div>
    )
}