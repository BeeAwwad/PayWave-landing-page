import PropTypes from "prop-types"

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#3da9fc] hover:shadow-md text-[#fffffe] font-semibold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default Button
