import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import "../styles/index.scss"

library.add(faCircleUser);

const Header = () => {
  const firstName = useSelector((state) => state.firstName);
  const token = JSON.parse(localStorage.getItem('token'));

  const signOut = () => {
    localStorage.clear()
  }

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={process.env.PUBLIC_URL + '/img/argentBankLogo.png'}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      {token ?
        <div>
          <a className="main-nav-item" href="user">
            <FontAwesomeIcon className="margin-icon" icon="fa-solid fa-circle-user" />
            {firstName}
          </a>
          <a onClick={signOut} className="main-nav-item" id="signOut" href="sign-in">
            <FontAwesomeIcon className="margin-icon" icon="fa-solid fa-right-from-bracket" />
            Sign Out
          </a>
        </div>
      :
        <div>
          <a className="main-nav-item" href="sign-in">
            <FontAwesomeIcon className="margin-icon" icon="fa-solid fa-circle-user" />
            Sign In
          </a>
        </div>
      }
    </nav>
  )
}

export default Header;