import { useState } from 'react'
import ColorButtons from './component/Buttons';

function App() {
  const [backgroundColorStyle, setBackgroundColorStyle] = useState('orange');

  return (
    <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: '100%', height: '100vh', backgroundColor: backgroundColorStyle}}>
      <ColorButtons backgroundColorStyle={setBackgroundColorStyle}/>
    </div>
  )
}

export default App
