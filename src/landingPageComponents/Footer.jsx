const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8 font-quicksand">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="contact-info">
            {/* Contact Information for PayWave */}
          </div>

          <nav className="footer-nav">
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
              {/* Add other navigation links */}
            </ul>
          </nav>

          <div className="social-links">
            {/* Social media icons linking to PayWave's profiles */}
          </div>

          <div className="copyright">
            &copy; {new Date().getFullYear()} PayWave
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
