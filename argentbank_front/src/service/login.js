import React, { useState } from 'react';
import { userData } from '../store/todoActions'
import User from '../pages/User'
import Profile from './profile';
import { useNavigate } from 'react-router-dom';

// let data;

// decode le token pour acceder au firstName et lastName
// function parseJwt (token) {
//     var base64Url = token.split('.')[1];
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));
  
//     data = JSON.parse(jsonPayload);
// };

const Login = (email, password) => {
    let navigate = useNavigate();
    fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(resp => resp.json())
    .then(
        (result) => {
            if(result.status !== 200) {
                // avec les redux, mettre error à true et si error = true alors afficher le message d'erreur sur la page sign in
                console.log(result)
            }else {
                localStorage.setItem("token", JSON.stringify(result.body.token));
                if(result.body.token) {
                    //router
                    navigate('/User')
                    // window.location.replace('/User')
                }
            }
        }
    )
}

export default Login;