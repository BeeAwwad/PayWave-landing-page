import { NewButton } from "./reusables/Button"
import { HoverProvider } from "../context/HoverContext"
import iphoneImage from "../assets/png/iPhone15.png"

// Features images
import CuttingEdgeImage from "../assets/png/cutting-edge.png"
import BillsImage from "../assets/png/bills.png"
import FlexibilityImage from "../assets/png/flexibility.png"
import UserExImage from "../assets/png/user-ex.png"
import { DoubleCircleeSvg } from "../assets/svg"

const Main = () => {
  const Benefits = [
    {
      id: 1,
      name: "Unified Financial Hub",
      ptag: "Combine your financial services for easy management of bills, savings, and investments.",
      image: null,
    },
    {
      id: 2,
      name: "Effortless Transactions",
      ptag: "Simplify your bills payments for a smooth and hassle-free experience.",
      image: null,
    },
    {
      id: 3,
      name: "Strong Security",
      ptag: "Enjoy peace of mind with PayWave, ensuring the highest level of security for your transactions and valuable data.",
      image: null,
    },
  ]

  const Features = [
    {
      id: 1,
      name: "Bills Payment",
      ptag: `Easily manage all your essential payments in one place. PayWave
      allows quick and secure payments for airtime, TV subscriptions,
      utilities like electricity and water, plus event tickets—no more
      hassle or late fees.`,
      image: BillsImage,
    },
    {
      id: 2,
      name: "Cash Flexibility",
      ptag: `Experience the ease of converting between digital and physical
      cash effortlessly. PayWave ensures flexibility for your everyday
      expenses.`,
      image: FlexibilityImage,
    },
    {
      id: 3,
      name: "User-Centric Experience",
      ptag: `Set and track your savings goals effortlessly. Customize plans,
      automate transfers, and witness your savings grow steadily.`,
      image: UserExImage,
    },
    {
      id: 4,
      name: "Cutting-Edge Security",
      ptag: `Rest assured, your financial data is protected. PayWave utilizes
      advanced security measures and accommodates various payment
      methods for your peace of mind.`,
      image: CuttingEdgeImage,
    },
  ]
  return (
    <main className="font-poppins w-full">
      <section
        id="home"
        className="bg-gradient-to-b from-[#DCEAFF]  to-[#fffffe] flex flex-col"
      >
        <div className="w-full">
          <div className="mt-5 flex flex-col max-w-6xl mx-auto items-center">
            <div className="text-center mx-16 mt-24 lg:mt-32">
              <h1 className="text-[#094067] text-5xl md:text-6xl font-bold">
                <span className="text-[#327CEB]">Revolutionize</span> Your
                Finances with <span className="text-[#327CEB]">PayWave</span>
              </h1>
              <p className="text-lg text-[#5f6c7b] mt-7 max-w-2xl mx-auto">
                Streamline your financial transactions, savings, and investments
                all in one place.
              </p>
            </div>
            <HoverProvider>
              <NewButton
                onClick={() => {}}
                className={"mt-9 mb-8 w-fit bg-transparent border-[#327ceb]"}
              >
                Download here
              </NewButton>
            </HoverProvider>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-8 mx-auto max-h-[400px] w-fit overflow-hidden">
            <img
              className="h-fit w-72 shadow-2xl"
              src={iphoneImage}
              alt="iphone-15"
            />
          </div>
        </div>
      </section>

      <section className="my-24 xl:my-36 mx-7 md:mx-10 h-fit flex flex-col gap-8 mb-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {Benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="p-6 flex flex-1 gap-5 items-center rounded-lg hover:shadow-md transition ease-out duration-300 shadow-sm"
            >
              <div className="lg:hidden xl:block">
                <DoubleCircleeSvg className={"w-16"} />
              </div>
              <div>
                <h1 className="text-[#094067] font-bold text-xl lg:text-3xl">
                  {benefit.name}
                </h1>
                <p className="text-base text-[#5f6c7b]">{benefit.ptag}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#094067] mt-20 lg:mt-24 max-w-[500px] lg:max-w-[832px] text-center font-semibold self-center text-2xl lg:text-4xl">
          Buy Airtime and Data, pay TV subscriptions and electricity bills all
          on the Paywave app.
        </p>
      </section>

      <section id="features" className="flex items-center justify-center">
        <div className="max-w-[1050px] mx-16">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 text-[#fffffe]">
            <div
              className="bg-[#002C6E] md:col-span-2 md:row-span-1 p-14 rounded-3xl"
              key={Features[0].id}
            >
              <h3 className="text-2xl lg:text-4xl  font-semibold mb-2">
                {Features[0].name}
              </h3>
              <p className="mt-7">{Features[0].ptag}</p>
              <div>
                <HoverProvider>
                  <NewButton
                    className={"hidden md:block mt-6 lg:mt-8"}
                    onClick={() => {}}
                  >
                    Get the app
                  </NewButton>
                </HoverProvider>
              </div>
            </div>

            <div
              className="bg-[#DCEAFF] text-[#002C6E] md:max-w-lg md:row-span-1 p-14 rounded-3xl"
              key={Features[1].id}
            >
              <h3 className="text-2xl lg:text-4xl  font-semibold mb-2">
                {Features[1].name}
              </h3>
              <p className="mt-7">{Features[1].ptag}</p>
            </div>

            <div
              className="bg-[#327CEB] md:max-w-lg p-14 rounded-3xl"
              key={Features[2].id}
            >
              <h3 className="text-2xl lg:text-4xl font-semibold mb-2">
                {Features[2].name}
              </h3>
              <p className="mt-7">{Features[2].ptag}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                `Using PayWave has made managing my finances a breeze. No more
                juggling multiple platforms!`
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Micheal Gough
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Add other sections */}
    </main>
  )
}

export default Main
