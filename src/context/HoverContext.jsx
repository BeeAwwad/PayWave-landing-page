import { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"

const HoverContext = createContext()

export const UseHoverContext = () => {
  return useContext(HoverContext)
}

export const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }

  return (
    <HoverContext.Provider
      value={{ isHovered, handleMouseOver, handleMouseOut }}
    >
      {children}
    </HoverContext.Provider>
  )
}

HoverProvider.propTypes = {
  children: PropTypes.any,
}
