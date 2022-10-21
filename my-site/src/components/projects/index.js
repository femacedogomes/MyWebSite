import React, { Fragment } from "react";
import { Column, Container, Notification } from 'rbx';
import '../../styles/projects.scss'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function ProjectsPage() {
  return (
    <div className="ProjetosPage">
      <Container breakpoint="widescreen">
        <Column.Group>
          <Column size={10} offset={1}>
            <Notification textAlign="centered" className="Projetos">
              Projetos
            </Notification>
            <Column.Group breakpoint="mobile" className="ProjectsGroup">
              <Column>
                <Notification textAlign="centered" className="Projeto">
                  Em Breve
                </Notification>
              </Column>
              <Column>
                <Notification textAlign="centered" className="Projeto">
                  Em Breve
                </Notification>
              </Column>

            </Column.Group>
            <Column.Group breakpoint="mobile" className="ProjectsGroup">
              <Column>
                <Notification textAlign="centered" className="Projeto">
                  Em Breve
                </Notification>
              </Column>
              <Column>
                <Notification textAlign="centered" className="Projeto">
                  Em Breve
                </Notification>
              </Column>

            </Column.Group>
          </Column>
        </Column.Group>
      </Container>
    </div>
  )
}

export default ProjectsPage;