import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mechta from "../../Assets/Projects/mechta.PNG";
import amediatv from "../../Assets/Projects/amediatv.PNG";
import abco from "../../Assets/Projects/abco.PNG";
import tcti from "../../Assets/Projects/tcti.PNG";
import double from "../../Assets/Projects/double.PNG";
import dtm from "../../Assets/Projects/dtm.PNG";

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
              imgPath={tcti}
              isBlog={false}
              title="tcti.uz"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Abdulaz1zov1/hiii/tree/main/api"
              demoLink="http://tcti.uz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dtm}
              isBlog={false}
              title="dtmtruckinginc.us"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Abdulaz1zov1/DTM-Trunking/tree/master/server"
              demoLink="https://www.dtmtruckinginc.us"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abco}
              isBlog={false}
              title="abco.uz"
              description="Online code and markdown abco build with react.js. Online abco which supports html, css, and js code with instant view of website. Online markdown abco for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the abco supports auto save of work using Local Storage"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://abco.uz/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mechta}
              isBlog={false}
              title="mechta-posuda.com"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Abdulaz1zov1/online-magazin-master"
              demoLink="https://mechta-posuda.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={double}
              isBlog={false}
              title="double-degree.tcti.uz"
              description="Using 'Natural Launguage Processing' for the detection of double-related posts and user's double ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/Abdulaz1zov1/qoshma-talim/tree/main/api"
              demoLink="http://double-degree.tcti.uz" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amediatv}
              isBlog={false}
              title="amediatv.uz"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of amediats of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the amediatv of a person."
              ghLink="https://github.com/Abdulaz1zov1/amedia-master"
              demoLink="https://amediatv.uz"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
