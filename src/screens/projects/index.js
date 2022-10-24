import React from "react";
import HeaderElement from "../../components/header";
import ProjectsPage from "../../components/projects";
import Footer from "../../components/footer";

function ProjectScreen() {
    return(
        <div className="pagina">
            <HeaderElement/>
            <ProjectsPage/>
            <Footer/>
        </div>
    )
}

export default ProjectScreen;