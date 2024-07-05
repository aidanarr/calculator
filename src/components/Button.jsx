
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

  const handleClick = (ev) => {
    ev.preventDefault();
    const numbers = screenNumbers + value;
    
    // if (operator !== "" && value !== "equals" && value !== "del" & value !== "C") {
    //   setScreenNumbers2(screenNumbers2 + value)
    // } else if (operator === "" && datatype === "number") {
    //   setScreenNumbers(numbers);
    // } else if (value === "equals") {
    //   doMath();
    // } else if (value === "C") {
    //   setScreenNumbers("")
    //   setScreenNumbers2("")
    //   setOperator("")
    //   setResult("");
    // } else if (value === "del") {
    //   if (screenNumbers2) {
    //     const screenNumbersCopy = screenNumbers2;
    //     const numbers = screenNumbersCopy.slice(0, screenNumbersCopy.length - 1);
    //     setScreenNumbers2(numbers)
    //   } else {
    //     const screenNumbersCopy = screenNumbers;
    //     const numbers = screenNumbersCopy.slice(0, screenNumbersCopy.length - 1);
    //     setScreenNumbers(numbers)
    //   }
    // } else {
    //   setOperator(value);
    // }

    if (value === "equals") {
      doMath();
    } else if (value === "C") {
      setScreenNumbers("")
      setScreenNumbers2("")
      setOperator("")
      setResult("");
    } else if (value === "del") {
      if (screenNumbers2) {
        const screenNumbersCopy = screenNumbers2;
        const numbers = screenNumbersCopy.slice(0, screenNumbersCopy.length - 1);
        setScreenNumbers2(numbers)
      } else if (screenNumbers) {
        const screenNumbersCopy = screenNumbers;
        const numbers = screenNumbersCopy.slice(0, screenNumbersCopy.length - 1);
        setScreenNumbers(numbers)
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
    <button onClick={handleClick} className={`btn btn-box__${value}`}>
      <p>
        {renderValue()}
      </p>
    </button>
  )
}

export default Button

