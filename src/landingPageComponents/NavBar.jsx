function NavBar() {
  return (
    <>
      <nav className="hidden lg:block ml-[8%]">
        <ul className="flex whitespace-nowrap">
          <li className="ml-9">
            <a href="#home">Home</a>
          </li>
          <li className="ml-9">
            <a href="#features">Features</a>
          </li>
          <li className="ml-9">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="ml-9">
            <a href="#aboutus">About Us</a>
          </li>
          {/* Add other navigation links */}
        </ul>
      </nav>
    </>
  )
}

export default NavBar
