import React, { useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
  const { signUp } = useAuth();
  const [authError, setAuthError] = useState("nil");
  const [email, setEmail] = useState('abc@jkl.xyz')
  const [password, setPassword] = useState('Password')

  async function Register(e) {
	e.preventDefault();
    const { error } = await signUp({
	  email: email,
	  password: password,
	});
	if (error) {
	  setAuthError(error.message);
	};
	console.log(authError);
  };

  return (
	<div>
	  <div>
        <form onSubmit={Register}>
          <span>Email: </span>
		  <input type='email' 
		    onChange={(e) => setEmail(e.target.value)}
			placeholder={email}/>
		  <br/>
		  <span>Password: </span>
		  <input type='password' 
		    onChange={(e) => setPassword(e.target.value)}
			placeholder={password}/>
		  <br/>
		  <input type='submit'
			value = "Signup" />
	    </form>
		<Link to={{ pathname: "/" }}>
            Login
        </Link>
		<p>{authError}</p>
	  </div>
	</div>
  );
};

export default SignUp;
