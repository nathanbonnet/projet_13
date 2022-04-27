import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import EditName from '../components/EditName'
import { useSelector } from "react-redux";
import Profile from "../service/profile"
import "../styles/index.scss"
import "../styles/main.scss"

library.add(faCircleUser, faRightFromBracket);


const User = () => {
  Profile()
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  const editName = () => {
    const modal = document.getElementById('modal');
    const page = document.getElementById('main');

    page.classList.add('flou')
    page.classList.remove('not-flou')
    modal.classList.add('show')
    modal.classList.remove('cancel_modal')
  }

  return (
    <>
      <main className="main bg-dark">
        <EditName />
        <div id='main'>
          <div className="header">
            <h1>Welcome back<br />{firstName} {lastName}!</h1>
            <button onClick={editName} className="edit-button">Edit Name</button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default User;