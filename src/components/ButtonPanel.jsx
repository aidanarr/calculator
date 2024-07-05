import Button from "./Button";

const ButtonPanel = ({screenNumbers, setScreenNumbers, operator, setOperator, screenNumbers2, setScreenNumbers2, doMath, setResult}) => {

    const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
    const operators = ["C", "div", "mult", "del", "sub", "add", "equals"];

  return (
    <div className="btn-box">
        {operators.map((item, i) => <Button setScreenNumbers={setScreenNumbers} screenNumbers={screenNumbers} setScreenNumbers2={setScreenNumbers2} screenNumbers2={screenNumbers2} setResult={setResult} doMath={doMath} operator={operator} setOperator={setOperator} datatype="operator" key={i} value={item} />)}
        {numbers.map((number, i) => <Button datatype="number"   setScreenNumbers={setScreenNumbers} screenNumbers={screenNumbers} setScreenNumbers2={setScreenNumbers2} screenNumbers2={screenNumbers2} operator={operator} key={i} value={number} setResult={setResult} />)}
    </div>
  )
}

export default ButtonPanel