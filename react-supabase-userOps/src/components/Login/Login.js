import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';
import './Login.css'

const Login = () => {

  const { user, signIn, deleteUser, signOut } = useAuth();
  const [authError, setAuthError] = useState("nil");
  const [email, setEmail] = useState('abc@jkl.xyz')
  const [password, setPassword] = useState('Password')

  async function Login(e) {
	e.preventDefault();
    const {  error } = await signIn({
	  email: email,
	  password: password,
  	});
	if (error) {
	  setAuthError(error.message);
	}
  };

  async function Delete() {
    const {  error } = await deleteUser(user.id);
	if (error) {
	  setAuthError(error.message);
	}
  };

  const LoginForm = (
    <div>
      <form onSubmit={Login}>
        <span>Email: </span>
		<input type='email' 
		  onChange={(e) => setEmail(e.target.value)}
		  placeholder='abc@jkl.xyz'/>
		<br/>
		<span>Password: </span>
		<input type='password' 
		  onChange={(e) => setPassword(e.target.value)}
		  placeholder='Password'/>
		<br/>
		<input type='submit'
		  value = "Login" />
	  </form>
      <Link to={{ pathname: "/signup" }}>
        SignUp
      </Link>
	</div>
  )

  const User = (
    <div className='Signout'>
      {() => setAuthError('nil')}
      <p>Welcome { user ? user.id : "null" }</p>
      <Link to={{ pathname: '/' }}>
        <button onClick={signOut}>Sign Out</button>
      </Link>
      {' '}
      <Link to={{ pathname: '/' }}>
        <button onClick={Delete}>Delete User</button>
      </Link>
    </div>
  )

  return (
	<div>
      { user ? User : LoginForm }
      <p>{authError}</p>
	</div>
  )
};

export default Login;