import { useState } from "react"
import { Button, NewButton } from "./reusables/Button"
import { LogoSvg } from "../assets/svg"
import { HoverProvider } from "../context/HoverContext"

const Header = () => {
  const Links = [
    { name: "Product", link: "#poduct" },
    { name: "About", link: "#about" },
    { name: "FAQ", link: "#FAQ" },
  ]
  let [open, setOpen] = useState(false)
  return (
    <header className="w-full top-0 left-0 z-50 h-fit bg-[#DCEAFF]">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 h-full">
        <div
          className="font-bold text-xl cursor-pointer flex items-center
          text-[#094067] font-orbitron h-full"
        >
          <span className="text-[#094067]">
            <LogoSvg className={"h-7 w-fit"} />
          </span>
          <span className="ml-4 text-sm">PayWave</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`font-poppins md:flex md:items-center md:gap-10 lg:gap-20 md:pb-0 pb-12 absolute md:static md:z-auto z-40 bg-[#DCEAFF] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-14" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className=" text-md md:my-0 my-7">
              <a
                href={link.link}
                className="text-[#5f6c7b] hover:text-[#C40000] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {open ? <Button className={"md:ml-6"}>Get Started</Button> : null}
        </ul>
        <HoverProvider>
          <NewButton
            className={"hidden md:block md:ml-6 bg-transparent"}
            onClick={() => {}}
          >
            Get Started
          </NewButton>
        </HoverProvider>
      </div>
    </header>
  )
}

export default Header
