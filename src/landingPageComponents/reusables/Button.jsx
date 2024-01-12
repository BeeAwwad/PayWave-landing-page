import PropTypes from "prop-types"
import { AppleStoreSvg, PlayStoreSvg } from "../../assets/svg"
import { UseHoverContext } from "../../context/HoverContext"

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#327CEB] hover:shadow-md text-[#fffffe] font-semibold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  )
}

const NewButton = ({ className, children }) => {
  const { isHovered, handleMouseOver, handleMouseOut } = UseHoverContext()
  return (
    <button
      className={`h-full px-4 py-2 border-2 border-[#002C6E] rounded-full bg-[#fffffe]  text-[#002C6E]   transition duration-300 ease-in-out ${
        isHovered && "button-hovered"
      } ${className}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="flex items-center justify-center w-fit">
        <AppleStoreSvg className="h-5 w-fit mr-1" />
        <PlayStoreSvg className="h-5  w-fit mr-1" />
        <span className="flex-shrink-0 md:text-sm">{children}</span>
      </div>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

NewButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export { Button, NewButton }
