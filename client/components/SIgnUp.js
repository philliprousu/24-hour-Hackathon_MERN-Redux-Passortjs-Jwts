import React, { useContext, useState } from 'react';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

  }

  return (
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="signin-email"><p>Email address:</p></label>
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            id="signin-email"
            placeholder='abc@mail.com . . . '
            required
          />
        </div>
        <div>
          <label htmlFor="password"><p>Password:</p></label>
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            id="password"
            required
          />
        </div>
        <button >Sign Up</button>
      </form>
  )
};

export default SignUp;