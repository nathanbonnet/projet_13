import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import User from './pages/User';

const token = JSON.parse(localStorage.getItem('token'));
const App = () => {
    if(token) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/sign-in" element={<SignIn />}/>
                    <Route path="/user" exact element={<User />}/>
                </Routes>
            </BrowserRouter>
        );
    }else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="*" element={<SignIn />}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
