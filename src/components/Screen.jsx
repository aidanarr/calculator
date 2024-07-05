

const Screen = ({screenNumbers, screenNumbers2, result}) => {

  const renderScreen = () => {
    if (result) {
      return result
    } else if (screenNumbers2) {
      return screenNumbers2
    } else return screenNumbers
  }
// 
  return (
    <div dir="rtl" className="screen">
        <p >
            {renderScreen()}
        </p>
    </div>
  )
}

export default Screen