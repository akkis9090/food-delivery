import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx';
import Footer from './Components/Footer/Footer.jsx';
import LoginPopup from './Components/LoginPopup/LoginPopup.jsx';

const App = () => {
    const [showLogIn, setShowLoginIn] = useState(false);
    return (
        <>
            {showLogIn ? <LoginPopup setShowLoginIn={setShowLoginIn} /> : <></>}
            <div className='App'>
                <Navbar setShowLoginIn= {setShowLoginIn} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/order' element={<PlaceOrder />} />

                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;