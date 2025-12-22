import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State variables with more descriptive names
  const [passwordLength, setPasswordLength] = useState(0); // Length of the generated password
  const [isSpecialCharactersAllowed, setIsSpecialCharactersAllowed] = useState(false); // Whether special characters are allowed
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(false); // Whether numbers are allowed
  const [generatedPassword, setGeneratedPassword] = useState(''); // The generated password

  // Function to generate a random password based on the selected settings
  const generateRandomPassword = () => {
    let characterPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Default pool (letters only)
    let newPassword = ''; // Initialize the new password

    // Add special characters to the pool if allowed
    if (isSpecialCharactersAllowed) characterPool += '!@#$%^&*()-_=+.,;:\'"?/|~`';
    // Add numbers to the pool if allowed
    if (isNumbersAllowed) characterPool += '0123456789';

    // Generate the password based on the selected length
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characterPool.length); // Random index within the character pool
      newPassword += characterPool.charAt(randomIndex); // Add a random character from the pool to the password string
    }

    setGeneratedPassword(newPassword); // Set the generated password in state
  };

  // useEffect hook to regenerate password whenever any of the settings change
  useEffect(() => {
    generateRandomPassword(); // Call the password generation function
  }, [isNumbersAllowed, passwordLength, isSpecialCharactersAllowed]); // Dependencies: runs when any of these state variables change

  return (
    <div className="passwordContainer">
      <h1>Password Generator</h1>
      <div className="inputField">
        {/* Display the generated password */}
        <div>{generatedPassword}</div>
        {/* Button to manually generate a new password */}
        <div onClick={generateRandomPassword} className="copyBtn">
          <p>Generate</p>
        </div>
      </div>

      <div className="passwordOptions">
        {/* Slider to adjust password length */}
        <div>
          <input
            id="passwordLengthRange"
            type="range"
            min="0"
            max="20"
            step="1"
            value={passwordLength}
            onInput={(e) => setPasswordLength(Number.parseInt(e.target.value))} // Update password length when slider is changed
          />
          <label htmlFor="passwordLengthRange">Length: {passwordLength}</label>
        </div>

        {/* Checkbox to toggle numbers in the password */}
        <div>
          <input
            type="checkbox"
            id="numbersAllowed"
            checked={isNumbersAllowed}
            onChange={() => setIsNumbersAllowed(!isNumbersAllowed)} // Toggle the isNumbersAllowed state
          />
          <label htmlFor="numbersAllowed">Allow Numbers</label>
        </div>

        {/* Checkbox to toggle special characters in the password */}
        <div>
          <input
            type="checkbox"
            id="specialCharsAllowed"
            checked={isSpecialCharactersAllowed}
            onChange={() => setIsSpecialCharactersAllowed(!isSpecialCharactersAllowed)} // Toggle the isSpecialCharactersAllowed state
          />
          <label htmlFor="specialCharsAllowed">Allow Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
