import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blogging Application Backend"
              description="A powerful and secure backend developed using Java and Spring Boot.
It supports features like user management, post creation, comments, and category handling.
Optimized for performance, scalability, and easy integration with frontend applications."
              ghLink="https://github.com/TusharPuriGoswami/Blogging_Application"
              demoLink="https://github.com/TusharPuriGoswami/Blogging_Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blogging Application Front"
              description="A responsive and user-friendly frontend built with modern web technologies.
It allows users to view, create, and interact with blog posts seamlessly.
Designed for smooth navigation, appealing UI, and integration with the backend API."
              ghLink="https://github.com/TusharPuriGoswami/Blogging_Application_Frontend"
              demoLink="https://github.com/TusharPuriGoswami/Blogging_Application_Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Smart Contact Manager"
              description="A Spring Boot-based web application to securely manage personal and professional contacts.
It offers user authentication, contact CRUD operations, and an intuitive dashboard.
Designed for efficiency, data security, and ease of use."
              ghLink="https://github.com/TusharPuriGoswami/Smart_Contact_Manager"
              demoLink="https://github.com/TusharPuriGoswami/Smart_Contact_Manager"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Student Grade Tracker"
              description="A dynamic and interactive frontend application built with React JS for tracking student grades.
It allows users to add, edit, and visualize student performance in an intuitive interface.
Designed for responsiveness, real-time updates, and seamless user experience."
              ghLink="https://github.com/TusharPuriGoswami/StudentGradeTracker"
              demoLink="https://github.com/TusharPuriGoswami/StudentGradeTracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Weather App"
              description="A sleek and responsive weather forecasting application built with React JS.
It fetches real-time weather data based on user location or search input.
Designed for accuracy, usability, and a clean user interface.."
              ghLink="https://github.com/TusharPuriGoswami/Weather_App"
              demoLink="https://appweatherweb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Ai Resume Builder"
              description="A Spring Boot-powered application that helps users create professional resumes using AI assistance.
It offers smart templates, real-time suggestions, and export options in various formats.
Designed for simplicity, efficiency, and personalized user experience."
              ghLink="https://github.com/TusharPuriGoswami/Resume-Builder"
              demoLink="https://github.com/TusharPuriGoswami/Resume-Builder"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
