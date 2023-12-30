import { EyePhoneSvg, CircleSvg } from "../assets/svg"
import Button from "./reusables/Button"
// Benefits images
import SecurityImage from "../assets/png/security.png"
import TransferImage from "../assets/png/money-transfer.png"
import HubImage from "../assets/png/network.png"
// Features images
import CuttingEdgeImage from "../assets/png/cutting-edge.png"
import BillsImage from "../assets/png/bills.png"
import FlexibilityImage from "../assets/png/flexibility.png"
import UserExImage from "../assets/png/user-ex.png"

const Main = () => {
  const Benefits = [
    {
      id: 1,
      name: "Unified Financial Hub",
      ptag: "PayWave combines financial services for easy management of bills, savings, and investments.",
      image: HubImage,
    },
    {
      id: 2,
      name: "Effortless Transactions",
      ptag: "PayWave simplifies bills payments for a smooth and hassle-free experience.",
      image: TransferImage,
    },
    {
      id: 3,
      name: "Strong Security",
      ptag: "PayWave ensures robust security for trusted transactions and data protection.",
      image: SecurityImage,
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
    <main className="font-quicksand mx-auto max-w-lg md:max-w-4xl lg:max-w-6xl pt-12 px-5">
      <section id="home" className="bg-[#fffffe] flex flex-col md:flex-row">
        <div className="w-full">
          <div className="mx-auto mt-5 flex flex-col max-w-sm">
            <h1 className="text-[#094067] text-4xl md:text-5xl font-bold mb-5">
              Revolutionize Your Finances with PayWave
            </h1>
            <p className="text-lg text-[#5f6c7b] mb-5">
              Streamline your financial transactions, savings, and investments
              all in one place.
            </p>
            <Button onClick={() => {}} className={"mb-5 w-full md:max-w-60"}>
              Get started free
            </Button>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-8 max-h-96 relative">
            <div className="relative z-40">
              <EyePhoneSvg className="w-[100%] h-full max-h-96 mx-auto mb-4" />
            </div>
            <CircleSvg
              className={
                "absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
              }
            />
          </div>
        </div>
      </section>

      <section className="mt-12 h-fit flex flex-col gap-8 mb-8">
        <div>
          <h1 className="text-center font-bold text-4xl">Why Use PayWave?</h1>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          {Benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="p-10 flex flex-col flex-1 gap-5 justify-start items-center bg-[#f5f7fd] rounded-lg hover:shadow-lg transition ease-out duration-300 shadow-sm"
            >
              <img
                src={benefit.image}
                alt={benefit.name}
                className="h-20 w-24 p-3 rounded-md bg-[#f5f7fd] "
              />
              <h1 className="font-bold text-xl">{benefit.name}</h1>
              <p>{benefit.ptag}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="py-12">
        <div className="container mx-auto mb-8">
          <div className="text-[#094067]  mb-8">
            <h2 className="text-3xl font-bold text-center">
              Enjoy these features
            </h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quos officia a harum.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {Features.map((feature) => (
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
                key={feature.id}
              >
                <div className="h-60 rounded-md overflow-hidden px-5">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={feature.image}
                    alt={feature.name}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl text-[#094067] font-semibold mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-[#5f6c7b]">{feature.ptag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-center p-5">
          <h2 className="text-center mb-4 md:mb-0 md:mr-5 font-bold text-2xl">
            Are you ready to PayWave?
          </h2>
          <Button className={""}>Get started</Button>
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
