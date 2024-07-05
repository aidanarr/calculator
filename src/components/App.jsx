import "../styles/App.scss"
import ButtonPanel from "./ButtonPanel"
import Screen from "./Screen"
import { useState } from "react"

function App() {

  const [screenNumbers, setScreenNumbers] = useState("");
  const [screenNumbers2, setScreenNumbers2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const doMath = () => {
    if (operator === "add") {
      const operation = parseFloat(screenNumbers) + parseFloat(screenNumbers2)
      setResult(operation)
    } else if (operator === "sub") {
      const operation = parseFloat(screenNumbers) - parseFloat(screenNumbers2)
      setResult(operation)
    } else if (operator === "mult") {
      const operation = parseFloat(screenNumbers) * parseFloat(screenNumbers2)
      setResult(operation)
    } else if (operator === "div") {
      const operation = parseFloat(screenNumbers) / parseFloat(screenNumbers2)
      setResult(operation)
    }
    
  }

  return (
    <>
      <Screen result={result} screenNumbers2={screenNumbers2} screenNumbers={screenNumbers} />
      <ButtonPanel doMath={doMath} operator={operator} setOperator={setOperator} setScreenNumbers={setScreenNumbers} screenNumbers={screenNumbers}  setScreenNumbers2={setScreenNumbers2} screenNumbers2={screenNumbers2} setResult={setResult} />
    </>
  )
}

export default App
