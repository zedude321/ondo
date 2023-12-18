import Logo from "@/components/logo";
export default function Login() {
  return (
    <div className="w-full h-screen flex items-start dark:bg-dark-bg dark:text-white">
      <div className="relative w-full h-full md:flex hidden flex-col">
        <img
          src="https://cdn.ondo.mn/strapi/Login_01_0ae99c2a80.jpg"
          className="h-full object-cover"
        />
      </div>
      <div className="md:min-w-[400px] w-full h-full  flex flex-col p-10 justify-between">
        <Logo />
        <div className="w-full flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Нэвтрэх эсвэл бүртгүүлэх</h3>
          <p className="text-sm mb-2">
            Та нэвтрэх бол өөрийн бүртгүүлсэн дугаараа оруулна уу. Бүртгүүлэх
            бол өөрийн нэр дээрх дугаараа ашиглана уу.
          </p>
        </div>
        <div className="w-full flex flex-col">
          <input
            type="Утасны дугаар"
            placeholder="Утасны дугаар"
            className="w-full dark:bg-dark-bg dark:text-white text-black p-4 border-solid border rounded-md border-black-300 outline-2 focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col my-2">
          <button className="w-full dark:text-black dark:bg-white font-bold hover:opacity-70 transition text-white bg-dark-content rounded-md p-4 text-center flex items-center justify-center ">
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
}
