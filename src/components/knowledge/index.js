import React, { Fragment } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Column, Container } from "rbx";
import '../../styles/knowledge.scss'

import html5 from '../../assets/images/html5.png'
import css3 from '../../assets/images/css-3.png'
import react from '../../assets/images/react.png'
import api from '../../assets/images/api.png'
import mongoDB from '../../assets/images/mongoDB.png'
import typescript from '../../assets/images/typescript.png'
import javascript from '../../assets/images/js.png'
import nodeJS from '../../assets/images/node-js.png'

function knowledgePage() {

    const React = function ReactInfo() {
        let title = "React"
        let text = `React é um biblioteca de Javascript, feito originalmente pelo Facebook, com intuito de facilitar a sincronização das diferentes ações que o corriam em um site ou aplicativo. Este, que foi estudado durante os cursos:
        Curso Discover - RocketSeat
        Curso Programador Full Stack JavaScript Pro - OneBitCode`
        let ReactTitle = document.getElementById('InfoTitle')
        let ReactText = document.getElementById('InfoText')
        ReactTitle.innerText = title
        ReactText.innerText = text
        
        
    }
    const Html5 = function Html5Info(){
        let title = "Html5"
        let text = `Html5 é uma linguagem de marcação, utilizada para dar semântica aos elementos. Este, que foi estudado durante os cursos de:
        Html5 e Css3 - Curso em video 
        Curso Programador Full Stack JavaScript Pro - OneBitCode
        Curso Discover - RocketSeat
        Html5 e CSS3: Técnicas Avançadas -Udemy`
        let Html5Title = document.getElementById('InfoTitle')
        let Html5Text = document.getElementById('InfoText')
        Html5Title.innerText = title
        Html5Text.innerText = text

    }

    const Css3 = function Html5Info() {
        let title = "CSS3"
        let text = `CSS3 (Cascading Style Sheets) é uma linguagem de estilo, utilizada para dar cor, tamanho, animações e diversas outras possibilidades de customizações. Este, que foi estudado durante os cursos de:
        Html5 e Css3 - Curso em video 
        Curso Programador Full Stack JavaScript Pro - OneBitCode
        Curso Discover - RocketSeat
        Html5 e CSS3: Técnicas Avançadas -Udemy`
        let Css3Title = document.getElementById('InfoTitle')
        let Css3Text = document.getElementById('InfoText')
        Css3Title.innerText = title
        Css3Text.innerText = text
    }
    const Api = function ApiInfo() {
        let title = "Api"
        let text = `API ou Application Programming Interface é um mecanismo que se utiliza para que dois componentes distintos possam compartilhar dados, onde um deles será o cliente e o outro o servidor. API foi abordado e utilizado durante os cursos de:
        Curso Programador Full Stack JavaScript Pro - OneBitCode
        Curso Discover - RocketSeat
        `
        let ApiTitle = document.getElementById('InfoTitle')
        let ApiText = document.getElementById('InfoText')
        ApiTitle.innerText = title
        ApiText.innerText = text
    }
    const MongoDB = function MongoDBIngo(){
        let title = "MongoDB"
        let text = `Mongo ou MongoDB é um dos mais famosos bancos de dados orientados a documentos, formado por registros sem definição formal de sua estrutura(noSQL). Esta tecnologia serve para o Back-End de uma aplicação, sendo possível armazenar e manusear dados. O MongoDB foi estudado e utilizado durante os cursos de:
        Curso Programador Full Stack JavaScript Pro - OneBitCode
        Curso Discover - RocketSeat`
        let MongoTitle = document.getElementById('InfoTitle')
        let MongoText = document.getElementById('InfoText')
        MongoTitle.innerText = title
        MongoText.innerText = text
    }
    const TypeScript = function TypeScripInfo(){
        let title = 'TypeScript'
        let text = `O TypeScript, criado pela Microsoft, é uma linguagem de programação baseada na linguagem já existente JavaScript. Surgiu primordilamente para possibilidar a utilização da programação Orientada a Objetos. O TypeScript foi estudado durante o curso de:
        Curso Programador Full Stack JavaScript Pro - OneBitCode
        `
        let TypeTitle = document.getElementById('InfoTitle')
        let TypeText = document.getElementById('InfoText')
        TypeTitle.innerText = title
        TypeText.innerText = text
    }
    const NodeJS = function NodeJSInfo() {
        let title = "NodeJS"
        let text = `O NodeJS é uma das ferramentas mais utilizadas no desenvolvimento Web. É um ambiente para execução de códigos JavaScript, empacotando e executando tudo que é necessário, até mesmo fora de um navegador(na sua máquina). O nodeJS foi estudado durante os cursos:
        Curso Programador Full Stack JavaScript Pro - OneBitCode
        Curso Discover - RocketSeat
        Curso de JavaScript - Curso em Video
        `
        let NodeTitle = document.getElementById('InfoTitle')
        let NodeText = document.getElementById('InfoText')
        NodeTitle.innerText = title
        NodeText.innerText = text

    }
    const JS = function JSInfo() {
        let title = "JavaScript"
        let text = `O JavaScript é a principal linguagem pra programação client-side da atualidade. Com sua sua linguagem multiparadigma, eventos, programação funcional e imperativo. O JavaScript foi estudado durante os cursos:
        Curso Programador Full Stack JavaScript Pro - OneBitCode
        Curso Discover - RocketSeat
        Curso de JavaScript - Curso em Video`
        let JSTitle = document.getElementById('InfoTitle')
        let JSText = document.getElementById('InfoText')
        JSTitle.innerText = title
        JSText.innerText = text

    }
    return(
        <Fragment>
            <Container className='KnowledgeElement'>
                <Column.Group>
                    <Column>
                        <h2 id="conhecimentos">
                            Conhecimentos</h2>
                    </Column>
                </Column.Group>
                <Column.Group>
                    <Column>
                    <div className="knowledgeIcons">
                        <img src={html5}
                        onClick={Html5}
                        className='knowledgeIcon'></img>
                        <img src={css3} 
                        onClick={Css3}
                        className='knowledgeIcon'>
                        </img>
                        <img src={javascript}
                        onClick={JS}
                        className='knowledgeIcon'>
                        </img>
                        <img src={nodeJS}
                        onClick={NodeJS}
                        className='knowledgeIcon'>
                        </img>
                        <img src={react} 
                        onClick={React}
                        className='knowledgeIcon'></img>
                        <img src={api}
                        onClick={Api}
                        className='knowledgeIcon'></img>
                        <img src={mongoDB}
                        onClick={MongoDB}
                        className='knowledgeIcon'></img>
                        <img src={typescript} 
                        onClick={TypeScript}
                        className='knowledgeIcon'></img>
                    </div>
                    </Column>
                    <Column className="knowledgeText">
                    <h3 id="InfoTitle">
                        Selecione um conhecimento a esquerda
                    </h3>
                    <p id="InfoText"></p>
                    </Column>
                </Column.Group>
            </Container>
        </Fragment>
    )
}

export default knowledgePage
