import React from 'react';
import { 
    Navigate,
    Route, 
    Routes } from 'react-router-dom';
import { Navbar } from './NavBar';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar />
        <hr />

        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="login" element={ <LoginPage /> } />
            <Route path="about" element={ <AboutPage /> } />
            <Route path="*" element={ <Navigate to="/login" /> } />
        </Routes>
    </ UserProvider>
  )
}
