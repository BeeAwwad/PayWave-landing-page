import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  WhiteLogo,
} from "../assets/svg"

const Footer = () => {
  return (
    <>
      <footer className="bg-[#002C6E] text-[#fffffe] rounded-t-3xl">
        <div className=" w-full p-20">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="self-center mb-10 lg:mb-0">
              <a href="#" className="flex items-center">
                <WhiteLogo className="h-8 mr-1" />
                <span className="self-center text-4xl font-semibold whitespace-nowrap ">
                  PayWave
                </span>
              </a>
            </div>

            <div className="mb-10 lg:mb-0">
              <h2 className="mb-6 text-3xl font-semibold  text-center">
                Company
              </h2>
              <ul className="font-medium text-xl text-center">
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Terns of Use
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-10 lg:mb-0">
              <h2 className="mb-6 text-3xl font-semibold text-center">
                Need Help?
              </h2>
              <ul className="text-xl text-center font-medium">
                <li className="mb-3">
                  <a href="" className="hover:underline">
                    help@paywave.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-semibold  text-center">
                Socials
              </h2>
              <div className="font-medium text-xl flex items-center lg:items-start justify-center lg:justify-normal">
                <InstagramLogo className={"mr-4"} />
                <TwitterLogo className={"mr-4"} />
                <FacebookLogo />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
