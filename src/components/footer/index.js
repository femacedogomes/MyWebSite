import React from 'react';
import '../../styles/footer.scss';
import { Container } from 'rbx'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function Footer() {
    return (
            <Container id='footer'>
                <p>
                    email para contato: femacedogomes@gmail.com
                </p>
                <p> telefone para contado:
                    +55 (85) 98165-4701
                </p>
                <a className='FooterLinks' href='https://github.com/femacedogomes' target={"_blank"}><FontAwesomeIcon icon={faGithub} className='FooterIcons'/></a>
                <a className='FooterLinks' href='https://www.linkedin.com/feed/' target={"_blank"}><FontAwesomeIcon icon={faLinkedin} className='FooterIcons'/></a>
            </Container>
    )
}

export default Footer