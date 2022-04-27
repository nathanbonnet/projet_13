import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import User from './pages/User';
import Data from './service/data'
// import notFound from './pages/notFound';

const token = JSON.parse(localStorage.getItem('token'));
const App = () => {
    Data()
    if(token) {
        return (
            // <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/sign-in" element={<SignIn />}/>
                        <Route path="/user" exact element={<User />}/>
                        {/* <Route path="*" element={<NotFound />}/> */}
                    </Routes>
                </BrowserRouter>
            // </Provider>
        );
    }else {
        return (
            // <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        {/* <Route path="/sign-in" element={<SignIn />}/> */}
                        <Route path="*" element={<SignIn />}/>
                    </Routes>
                </BrowserRouter>
            // </Provider>
        );
    }
}

export default App;
