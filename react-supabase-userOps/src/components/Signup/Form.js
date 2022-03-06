import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/Auth';
import './Form.css'

const Form = ({ handleClose }) => {
  const { user, signUp, signIn, deleteUser } = useAuth();
  const [authError, setAuthError] = useState("nil");
  const [email, setEmail] = useState('abc@jkl.xyz')
  const [password, setPassword] = useState('Password')
  const [key, setKey] = useState('Key')

  useEffect(() => {
    if (user) {
	  handleClose();
    }
  }, [user, handleClose]);

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

  async function Login(e) {
	e.preventDefault();
    const {  error } = await signIn({
	  email: email,
	  password: password,
  	});
	if (error) {
	  setAuthError(error.message);
	}
  }

  async function Delete(e) {
	e.preventDefault();
    const {  error } = await deleteUser(key);
	if (error) {
	  setAuthError(error.message);
	}
  }

  return (
	<div>
	  <div>
        <form onSubmit={Register}>
          <span>Email: </span>
		  <input type='text' 
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
	  </div>
	  <div>
	    <form onSubmit={Login}>
		<input type='submit'
			value = "Login" />
		</form>
	  </div>
	  <div>
	    <form onSubmit={Delete}>
		  <span>Key: </span>
		  <input type='text' 
		    onChange={(e) => setKey(e.target.value)}
			placeholder={key}/>
		  <br/>
		  <input type='submit'
			value = "Delete" />
		  <p>{authError}</p>
		</form>
	  </div>
	</div>
  );
};

export default Form;
