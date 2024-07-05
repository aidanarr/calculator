
const Button = ({value, screenNumbers, setScreenNumbers, datatype, operator, setOperator, screenNumbers2, setScreenNumbers2, setResult, doMath}) => {

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

  const resetScreen = () => {
    setScreenNumbers("");
    setScreenNumbers2("");
    setOperator("");
    setResult("")
  }

  const deleteNumber = (string, func) => {
    const screenNumbersCopy = string;
    const numbers = screenNumbersCopy.slice(0, screenNumbersCopy.length - 1);
    func(numbers)
  }

  const handleClick = (ev) => {
    ev.preventDefault();

    if (value === "equals") {
      doMath();
    } else if (value === "C") {
      resetScreen()
    } else if (value === "del") {

      if (screenNumbers2) {
        deleteNumber(screenNumbers2, setScreenNumbers2)
      } else if (screenNumbers) {
        deleteNumber(screenNumbers, setScreenNumbers)
      } else false

    } else if (operator !== "" && datatype === "number") {

      if (value === "." && !screenNumbers2) {
        return false
      } else if (value === "." && screenNumbers2.includes(".")) {
        return false
      } else setScreenNumbers2(screenNumbers2 + value) 

    } else if (operator === "" && datatype === "number") {

      if (value === "." && !screenNumbers) {
        return false
      } else if (value === "." && screenNumbers.includes(".")) {
        return false
      } else setScreenNumbers(screenNumbers + value)

    } else{
      setOperator(value);
    }
  }

  return (
    <button onClick={handleClick} className={`btn btn-box__${value} ${datatype}`}>
      <p>
        {renderValue()}
      </p>
    </button>
  )
}

export default Button

