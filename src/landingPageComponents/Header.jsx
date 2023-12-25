import NavBar from "./NavBar"

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src="paywave_logo.png" alt="PayWave Logo" className="h-8" />
        </div>
        <NavBar />
        <div className="cta-button">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
