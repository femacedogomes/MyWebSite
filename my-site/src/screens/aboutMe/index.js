import React from "react";
import HeaderElement from "../../components/header";
import AboutMe from "../../components/aboutMe"
import Footer from "../../components/footer";
import '../../styles/AboutMe.scss'
import '../../styles/test.scss';

function AboutMeScreen() {
    return (
        <div className="pagina paginaAboutMe">
            <HeaderElement />
            <AboutMe/>
            <Footer/>
        </div>
    )
}

export default AboutMeScreen;