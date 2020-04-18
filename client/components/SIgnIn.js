import React, { useContext, useState } from 'react';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(false);

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
        <button >Sign In</button>
      </form>
  )
};

export default SignIn;