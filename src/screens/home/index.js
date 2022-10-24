import React, { useEffect} from "react";
import HeaderElement from "../../components/header";
import HomePage from "../../components/home";
import ProjectsPage from "../../components/projects";
import KnowledgePage from '../../components/knowledge'
import AboutMe from "../../components/aboutMe"
import Footer from "../../components/footer";
import {useInView} from 'react-intersection-observer';
import '../../styles/test.scss';


function HomeScreen() {
    const {ref: RocketRef, inView: RocketInView}= useInView()
    
    const {ref: ProjectRef, inView: ProjectInView} = useInView();

    const {ref: KnowledgeRef, inView: KnowledgeInView} = useInView()

    const {ref: AboutMeRef, inView: AboutMeInView} = useInView();

    return(
        <div className="pagina" id="Pagina">
            <HeaderElement/>
            <div className="HomePage">
                <HomePage/>
            </div>
            <div ref={KnowledgeRef} className={`Knowledge ${KnowledgeInView? 'stepBystep': ''}`} >
                <KnowledgePage/>
            </div>
            <div ref={AboutMeRef} className={`aboutMe ${AboutMeInView? 'animatedView': ''} `}>
                <AboutMe/>
            </div>
            <div ref={ProjectRef} className={`Projects ${ProjectInView? 'animatedView': ''}`}> 
            <ProjectsPage/>
            </div>
            <Footer/>
        </div>
    )
};

export default HomeScreen;