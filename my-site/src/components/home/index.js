import React, { Fragment, useEffect, useState} from 'react';
import { Column, Title,Image} from 'rbx';
import '../../styles/home.scss';
import Caricatura from '../../assets/images/Caricaturav2.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesDown} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

function HomePage() {
    const [isVisible, setIsVisible] = useState(true)
    const [height, setHeight] = useState(0)

    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll);
        return ()=> {
            window.removeEventListener("scroll",listenToScroll)
        }
    },[])
    const listenToScroll = () => {
        let heightToHideFrom = 100;
        const winScroll = 
        document.body.scrollTop || 
        document.documentElement.scrollTop;
        setHeight(winScroll);

        if(winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }

    return (
        <Fragment>
        <Column.Group className='Home'>
            <Column>
                <h2 size={2} className='HomeTitle'>
                    Olá, eu sou 
                </h2>
                <h1 size={1} className='typingAnimation' color='danger'>
                    Felipe Macedo Gomes
                </h1>
                <h2 size={4} className='HomeTitle'>
                    Seja em vindo a minha página profissional!
                </h2>
                <p> Sou um desenvolvedor web em constante aprendizado, buscando oportunidades na área de front-end ou full stack.</p>
                <div className='divLinks'>
                <a className="aLink" href='https://www.linkedin.com/feed/' target={"_blank"}>
                 <FontAwesomeIcon icon={faLinkedin} className='Icons'/>
                </a>
                <a className='aLink' href='https://github.com/femacedogomes' target={'_blank'}>
                    <FontAwesomeIcon icon={faGithub} className='Icons'/>
                </a>
                </div>
            </Column>
            <Column>
                <Image.Container>
                    <Image src={Caricatura} className='caricature'>
                    </Image>
                </Image.Container>
            </Column>
        </Column.Group>
        {
            isVisible
            &&
            <div className='ScrollDown' onScroll={()=> console.log('helo')}>
            <p>Scroll Down</p>
            <FontAwesomeIcon icon={faAnglesDown}/>
        </div>
        }
        </Fragment>
    )
}

export default HomePage;