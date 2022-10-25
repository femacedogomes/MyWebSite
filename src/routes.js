import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectScreen from './screens/projects';
import ContactScreen from './screens/contact';
import AboutMeScreen from './screens/aboutMe';
import HomeScreen from './screens/home'
import ThanksPage from './screens/Thanks';

function RoutesNav() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/about' element={<AboutMeScreen/>}/>
                <Route path='/projects' element={<ProjectScreen/>}/>
                <Route path='/contact' element={<ContactScreen/>}/>
                <Route path='/thanks' element={<ThanksPage/>}/>
            </Routes>
        </Router>
    )
}

export default RoutesNav;