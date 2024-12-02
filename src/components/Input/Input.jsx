import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const Input = ({ label, type, name, id, placeholder, errorMessage, ...props }) => {
  const theme = useContext(ThemeContext)

  console.log(theme);

  return (
    <label className="input-wrapper" htmlFor={id}>
      {label}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required
        {...props}
      />
      <span id="error-message">{errorMessage}</span>
    </label>
  )
}
