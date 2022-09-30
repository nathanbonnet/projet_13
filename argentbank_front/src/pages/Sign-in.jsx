import React from 'react';
import { useSelector } from 'react-redux';
import login from '../service/login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import "../styles/index.scss"

library.add(faCircleUser);



function submit (event) {
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  login(email, password)
  event.preventDefault();
}


const SignIn = () => {
  const messageError = useSelector((state) => state.error);
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon="fa-solid fa-circle-user" />
        <h1 id='form'>Sign In</h1>
        <form type="button" onSubmit={submit}>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          {messageError ? <span className="error">{messageError}</span> : ""}
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default SignIn;
