import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State variables with more descriptive names
  const [passwordLength, setPasswordLength] = useState(0); // Length of the generated password
  const [isSpecialCharactersAllowed, setIsSpecialCharactersAllowed] = useState(false); // Whether special characters are allowed
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(false); // Whether numbers are allowed
  const [generatedPassword, setGeneratedPassword] = useState(''); // The generated password

  // Function to generate a random password
  const generateRandomPassword = () => {
    let characterPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Default pool (letters only)
    let newPassword = ''; // Initialize the new password

    // Add special characters to the pool if allowed
    if (isSpecialCharactersAllowed) characterPool += '!@#$%^&*()-_=+.,;:\'"?/|~`';
    // Add numbers to the pool if allowed
    if (isNumbersAllowed) characterPool += '0123456789';

    // Generate the password based on the selected length
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characterPool.length);
      newPassword += characterPool.charAt(randomIndex); // Add a random character from the pool
    }

    setGeneratedPassword(newPassword); // Set the generated password in state
  };

  useEffect(() => {
    generateRandomPassword();
  },[isNumbersAllowed, passwordLength, isSpecialCharactersAllowed])



  return (
    <div className="passwordContainer">
      <h1>Password Generator</h1>
      <div className="inputField">
        <div>{generatedPassword}</div>
        <div onClick={generateRandomPassword} className="copyBtn">
          <p>Generate</p>
        </div>
      </div>

      <div className="passwordOptions">
        <div>
          <input
            id="passwordLengthRange"
            type="range"
            min="0"
            max="20"
            step="1"
            value={passwordLength}
            onInput={(e) => setPasswordLength(Number.parseInt(e.target.value))}
          />
          <label htmlFor="passwordLengthRange">Length: {passwordLength}</label>
        </div>

        <div>
          <input 
            type="checkbox" 
            id="numbersAllowed" 
            checked={isNumbersAllowed} 
            onChange={() => setIsNumbersAllowed(!isNumbersAllowed)} 
          />
          <label htmlFor="numbersAllowed">Allow Numbers</label>
        </div>

        <div>
          <input 
            type="checkbox" 
            id="specialCharsAllowed" 
            checked={isSpecialCharactersAllowed} 
            onChange={() => setIsSpecialCharactersAllowed(!isSpecialCharactersAllowed)} 
          />
          <label htmlFor="specialCharsAllowed">Allow Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
