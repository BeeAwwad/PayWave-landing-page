import { EyePhoneSvg } from "../assets/svg"
import Button from "./reusables/Button"

const Main = () => {
  return (
    <main className="font-quicksand">
      <section id="home" className="bg-[#fffffe] flex flex-col md:flex-row">
        <div className="container mx-auto text-center px-4 py-16">
          <h1 className="text-[#094067] text-4xl md:text-5xl font-bold mb-8">
            Revolutionize Your Finances with PayWave
          </h1>
          <p className="text-lg text-[#5f6c7b] mb-8">
            Streamline your financial transactions, savings, and investments all
            in one place.
          </p>
          <Button onClick={() => {}} className={"w-full lg:w-1/2"}>
            Get started free
          </Button>
        </div>
        <div className="w-full lg:w-[50%]">
          <EyePhoneSvg className="w-[70%] mx-auto mb-4" />
        </div>
      </section>

      <div className="spacer layer1"></div>

      <section id="features" className="py-12 bg-[#d8eefe]">
        <div className="container mx-auto">
          <h2 className="text-3xl text-[#094067] font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl text-[#094067] font-semibold mb-2">
                Bills Payment
              </h3>
              <p className="text-[#5f6c7b]">
                Easily manage all your essential payments in one place. PayWave
                allows quick and secure payments for airtime, TV subscriptions,
                utilities like electricity and water, plus event tickets—no more
                hassle or late fees.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-[#094067] font-semibold mb-2">
                Cash Flexibility
              </h3>
              <p className="text-[#5f6c7b]">
                Experience the ease of converting between digital and physical
                cash effortlessly. PayWave ensures flexibility for your everyday
                expenses.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-[#094067] font-semibold mb-2">
                User-Centric Experience
              </h3>
              <p className="text-[#5f6c7b]">
                Set and track your savings goals effortlessly. Customize plans,
                automate transfers, and witness your savings grow steadily.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-[#094067] font-semibold mb-2">
                Cutting-Edge Security
              </h3>
              <p className="text-[#5f6c7b]">
                Rest assured, your financial data is protected. PayWave utilizes
                advanced security measures and accommodates various payment
                methods for your peace of mind.
              </p>
            </div>
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
