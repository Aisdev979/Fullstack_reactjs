function ColorButtons({backgroundColorStyle}) {

    const changeColor = (e) => {
        e.preventDefault();

        const userColorChoice = e.target.value;
        backgroundColorStyle(userColorChoice)
    }
    
  return (
    <div className="button-card" onClick={changeColor}>
        <button className="red-button" value='red'>Red</button>
        <button className="green-button" value='green'>Green</button>
        <button className="blue-button" value='blue'>Blue</button>
    </div>
  )
}

export default ColorButtons