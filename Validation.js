import React, { useState } from 'react';
import './validation.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [invalidEmail, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [rPassword, setRPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rPasswordError, setRPasswordError] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [invalidNumber, setNumberError] = useState('');

  const handleSignUp = () => {
    let isValid = true;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!email) {
      setEmailError('Please enter your email');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Mobile number validation
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobileNumber) {
      setNumberError('Please enter your mobile number');
      isValid = false;
    } else if (!mobilePattern.test(mobileNumber)) {
      setNumberError('Please enter a valid 10-digit mobile number');
      isValid = false;
    } else {
      setNumberError('');
    }

    // Password validation
    if (!password) {
      setPasswordError('Please enter your password');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Re-enter password validation
    if (!rPassword) {
      setRPasswordError('Please re-enter your password');
      isValid = false;
    } else if (password !== rPassword) {
      setRPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setRPasswordError('');
    }

    // Final validation check
    if (isValid) {
      setMessage('Signed Up Successfully');
    } else {
      setMessage('');
    }
  };

  return (
    <>
      <div className="form1">
        <h1>SIGN UP FORM</h1>
        <div className="form">
          <input
            type="email"
            value={email}
            placeholder="Enter email id"
            onChange={(e) => setEmail(e.target.value)}
          /><br /><br />
          <div>{invalidEmail}</div>

          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
          <div>{passwordError}</div>

          <input
            type="password"
            value={rPassword}
            placeholder="Re-enter your password"
            onChange={(e) => setRPassword(e.target.value)}
          /><br /><br />
          <div>{rPasswordError}</div>

          <input
            type="tel"
            value={mobileNumber}
            placeholder="Enter your mobile number"
            onChange={(e) => setMobileNumber(e.target.value)}
          /><br /><br />
          <div>{invalidNumber}</div>

          <div>{message}</div>
          <button onClick={handleSignUp}>Sign Up Here</button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
