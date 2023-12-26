import NavBar from "./NavBar"
import Button from "./reusables/Button"

const Header = () => {
  return (
    <header className="bg-[#fffffe] text-[#094067] font-quicksand flex items-center justify-center h-16 lg:h-14">
      <div className="w-full flex justify-between items-center mx-auto my-0 px-5 md:px-10 lg:px-14 max-w-1500">
        <div className="flex">
          <div className="logo">
            <img src="paywave_logo.png" alt="PayWave Logo" className="h-8" />
          </div>
          <NavBar />
        </div>
        <div>
          <Button className={"hidden lg:block"} onClick={() => {}}>
            Get started free
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
