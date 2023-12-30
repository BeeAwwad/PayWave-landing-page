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
        <div className="container mx-auto">
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
      </section>

      <section id="testimonials" className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <blockquote className="text-lg">
                &quot;Using PayWave has made managing my finances a breeze. No
                more juggling multiple platforms!&quot; - John Doe
              </blockquote>
              {/* Include other testimonials */}
            </div>
          </div>
        </div>
      </section>

      {/* Add other sections */}
    </main>
  )
}

export default Main
