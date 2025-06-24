import React, { useState } from 'react';
import './App.css'; 

const Form = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [userData, setUserData] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    setUserData(`User ID : ${name}, Password : ${pass}`)
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter user ID"
        className="input"
        value={name}
        name="name"
      /><br />
      <input
        onChange={(e) => setPass(e.target.value)}
        type="password"
        placeholder="Enter user password"
        className="input"
        value={pass}
        name="pass"
      /><br />
      <input
        type="submit"
        value="Login"
        className="input"
      />
    </form>
    <p>{userData}</p>
</>
  );
};

export default Form;
