import React from "react";
import HeaderElement from "../../components/header";
import ContactPage from '../../components/contact'
import Footer from "../../components/footer";


function ContactScreen() {
    return(
        <div className="pagina" >
            <HeaderElement/>
            <ContactPage/>
            <Footer/>
        </div>
    )
}

export default ContactScreen;