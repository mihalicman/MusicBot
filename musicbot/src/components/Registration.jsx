import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
      const url = 'http://localhost/MusicBot-project/musicbot/php/register.php';
      let fData = new FormData();
      fData.append('username', username);
      fData.append('email', email);
      fData.append('password', password);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
  }

  return (
    <div className='block'>
    <div className="register-form">
      <h2>Register</h2>
      <form>
        <input
          type="text"
          name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  </div> 
  );
};

export default Registration;
