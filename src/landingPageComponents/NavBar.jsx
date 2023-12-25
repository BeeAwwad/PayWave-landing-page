function NavBar() {
  return (
    <>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          {/* Add other navigation links */}
        </ul>
      </nav>
    </>
  )
}

export default NavBar
