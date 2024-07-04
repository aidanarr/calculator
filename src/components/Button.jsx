
const Button = ({value, screenNumbers, setScreenNumbers, datatype, operator, setOperator, screenNumbers2, setScreenNumbers2, doMath}) => {

  const renderValue = () => {

    if (value === "del") {
      return "⌫"
    } else if (value === "div") {
      return "/"
    } else if (value === "mult") {
      return "*"
    } else if (value === "sub") {
      return "-"
    } else if (value === "add") {
      return "+"
    } else if (value === "equals") {
      return "="
    } else return value
  }



  const handleClick = (ev) => {
    ev.preventDefault();
    const numbers = screenNumbers + value;
    
    if (operator !== "" && value !== "equals") {
      setScreenNumbers2(screenNumbers2 + value)
    } else if (operator === "" && datatype === "number") {
      setScreenNumbers(numbers);
    } else if (value === "equals") {
      doMath();
    } else {
      setOperator(value);
    }
    
  }

  return (
    <button onClick={handleClick} className={`btn btn-box__${value}`}>
      <p>
        {renderValue()}
      </p>
    </button>
  )
}

export default Button

