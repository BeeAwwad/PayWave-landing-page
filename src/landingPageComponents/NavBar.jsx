import Button from "./reusables/Button"

function NavBar() {
  const Links = [
    { name: "Home", link: "#home" },
    { name: "Features", link: "#features" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "About Us", link: "#aboutus" },
  ]
  return (
    <>
      <nav className="">
        <ul className="lg:flex lg:whitespace-nowrap pb-4 absolute md:static bg-[#fffffe] lg:z-auto z-[1] left-0 w-full pl-6 lg:pl-0">
          <Button className={"lg:hidden"} onClick={() => {}}>
            Try for free
          </Button>
          {Links.map((link, index) => (
            <li
              key={index}
              className="my-7 lg:my-0 lg:ml-9 text-[#5f6c7b] hover:text-[#ef4565]"
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavBar
