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
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <WhiteLogo className="h-8 me-3" />
                <span className="self-center text-2xl lg:text-4xl font-semibold whitespace-nowrap ">
                  PayWave
                </span>
              </a>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-semibold uppercase">Company</h2>
              <ul className="font-medium text-xl">
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
            <div>
              <h2 className="mb-6 text-3xl font-semibold uppercase">
                Need Help?
              </h2>
              <ul className="text-xl font-medium">
                <li className="mb-3">
                  <a href="" className="hover:underline">
                    help@paywave.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-semibold uppercase text-center">
                Socials
              </h2>
              <div className="font-medium text-xl flex">
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
