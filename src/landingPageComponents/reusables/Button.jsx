import PropTypes from "prop-types"

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#327CEB] hover:shadow-md text-[#fffffe] font-semibold py-4 px-4 rounded ${className}`}
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
