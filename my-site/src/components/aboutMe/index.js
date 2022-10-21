import React, {Fragment} from "react";
import {Column, Container, Title, Image, Content,Link, Button} from "rbx";
import Selfie from '../../assets/images/ftPerfil.jpeg'
import '../../styles/AboutMe.scss';

function AboutMe() {
    const AboutMePerson = function AboutMePerson(){
        let TextAboutMe1 = document.getElementById('TextAboutMe1')
        let TextAboutMe2 = document.getElementById('TextAboutMe2')
        let ButtonPrograming = document.getElementById('Programing')
        let ButtonOutofPrograming = document.getElementById('OutOfPrograming')
        TextAboutMe2.classList.remove('hide')
        TextAboutMe1.classList.add('hide')
        ButtonOutofPrograming.classList.add('is-active')
        ButtonPrograming.classList.remove('is-active')
    }
    const AboutMeProg = function AboutMeProg(){
        let TextAboutMe1 = document.getElementById('TextAboutMe1')
        let TextAboutMe2 = document.getElementById('TextAboutMe2')
        let ButtonPrograming = document.getElementById('Programing')
        let ButtonOutofPrograming = document.getElementById('OutOfPrograming')
        TextAboutMe1.classList.remove('hide')
        TextAboutMe2.classList.add('hide')
        ButtonOutofPrograming.classList.remove('is-active')
        ButtonPrograming.classList.add('is-active')

    }
    return(
            <Container breakpoint="widescreen" id="AboutMePage">
                <Column.Group gapSize={6} className= "ColumnGroup">
                    <Column size={8}>
                        <Content>
                            <Title>Sobre mim...</Title>
                            <Button id='Programing'
                            onClick={AboutMeProg}
                            color='dark'
                            className="is-active">
                                Programador
                            </Button>
                            <Button id="OutOfPrograming" color='dark'
                            onClick={AboutMePerson}>
                                Além da Programação
                            </Button>
                            <p id="TextAboutMe1">
                                Tive meu primeiro contato com a programação na graduação de engenharia Civil. Em março de 2022 decidi focar 100% na carreira de desenvolvedor. Desde então venho fazendo cursos focados no mercado atual de trabalho, sempre pensando na carreira de Front-End ou Full stack. Estou aberto a propostas de trabalho, sejam elas temporárias ou fixas, sempre aceitando desafios e buscando aprendizado. 
                            </p>
                            <p id="TextAboutMe2" className="hide">
                            Me chamo Felipe Macêdo GOmes e sou natural de Fortaleza-CE. Graduado e mestrado em Engenharia civil pelo IPB-PT. Comecei a  faculdade de Eng.Civil na Unichristus e Posteriormente transferi para o IPB, em Portugal, onde também realizei meu mestrado. Durante o mestrado, me envolvi bastante com a área da tecnologia e acabei descobrindo um proximidade com a programação, devido a utilização de vários sofwares. <br/>Deixando de lado a parta academica, curto bastante ir para a academia e sou bastante diciplinado com relação a rotina de treino e alimentação. Sempre tive muito contato com computador e a área da tecnologia. 
                            </p>
                            <Title as="h3">Qualificações</Title>
                            <p>
                                JavaScript, ReactJS, HTML5, CSS3, TypeScript,Api, MongoDB, Postman, Bulma, Rbx
                            </p>
                            <ul>
                                <li>HTML5 E CSS3 - Curso em video.</li>
                                <li>JAVASCRIPT - Curso em video.</li>
                                <li>
                                    Programador Full Stack Javascript PROFISSIONAL - OneBitCode.
                                </li>
                                <li>Curso Discover - RocketSeat.</li>
                                <li>
                                HTML5 e CSS3: Técnicas Avançadas - Udemy
                                </li>
                            </ul>
                        </Content>
                    </Column>

                    <Column className="ColumnImage">
                        <Image  src={Selfie} className='ftPerfil'>
                        </Image>
                        <Column.Group>
                            <Column>
                                <a className="aLink" href='https://www.linkedin.com/feed/' target={"_blank"}>Linkedin</a>
                            </Column>
                            <Column>
                                <a className="aLink" href='https://github.com/femacedogomes' target={"_blank"}>GitHub</a>
                            </Column>
                        </Column.Group>

                    </Column>
                </Column.Group>
            </Container>
        
        
    )
}

export default AboutMe;
