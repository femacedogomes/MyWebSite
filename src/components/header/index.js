import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, Container,Button, Title} from 'rbx'
import {Link} from 'react-router-dom';
import '../../styles/header.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons'

function HeaderElement() {

    const [darkTheme, setDarkTheme] = useState(false)

    const themeMode = document.getElementById('root');

    const enableDarkMode = () => {
        themeMode.style.backgroundImage =  "linear-gradient(#000000ab,#000000d3)"
        setDarkTheme(true)
        // localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
        themeMode.style.backgroundImage =  "linear-gradient(#DE9F40,#F7B148)"
        setDarkTheme(false)
        // localStorage.setItem('darkMode', null)
    }

    const themeModeToggle = () => {
        if( darkTheme == false){
            enableDarkMode();
        }else {
            disableDarkMode();  
        }
    }
    return (
        <Fragment>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <Navbar.Item href="#" id="TitleName">
                            <Title size={3}>
                            {`<Femacedogomes/>`}
                            </Title>
                        </Navbar.Item>
                        <Navbar.Burger />
                    </Navbar.Brand>
                </Container>

                <Container className='Theme'>
                    <div id="DivThemeIcon">
                        <Button id="darkModeToggle"
                        onClick={themeModeToggle}outlined={true}
                        inverted={true}
                        rounded={true}
                        color="dark">
                        <FontAwesomeIcon icon={faCircleHalfStroke} 
                        />
                        </Button>
                    </div>            
                </Container>

                <Navbar.Menu>
                    <Navbar.Segment align="start" className='Menu'>
                        <Navbar.Item as={Link} to='/' className='Link'>
                                    Home    
                        </Navbar.Item>
                        <Navbar.Item as={Link} to='/about' className='Link'>
                                        Sobre mim
                        </Navbar.Item>
                        <Navbar.Item as={Link} to='/contact' className='Link'>
                                        Contato
                        </Navbar.Item>

                        <Navbar.Item as={Link} to='/projects'
                                    className='Link'>
                                        Projetos
                        </Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Navbar>
        </Fragment>
    );
}

export default HeaderElement;