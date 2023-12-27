import { useState } from "react"
import Button from "./reusables/Button"

const Header = () => {
  const Links = [
    { name: "Home", link: "#home" },
    { name: "Features", link: "#features" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "About Us", link: "#aboutus" },
  ]
  let [open, setOpen] = useState(false)
  return (
    <div className="shadow-md w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#fffffe] py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
          text-[#094067]"
        >
          <span className="text-3xl text-[#094067] mr-1 pt-2">
            <ion-icon name="logo-react"></ion-icon>
          </span>
          PayWave
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#fffffe] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-[#5f6c7b] hover:text-[#ef4565] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  )
}

export default Header
