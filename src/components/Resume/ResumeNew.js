



import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const googleDrivePDF =
    "https://drive.google.com/file/d/1mHkooMsovo-DgarqJw3orWnD5bVXLyn8/view";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
  <Button
    variant="primary"
    href={googleDrivePDF}
    target="_blank"
    style={{ maxWidth: "250px" }}
  >
    <AiOutlineDownload />
    &nbsp;Download CV
  </Button>
</Row>

        

      <Row className="resume" style={{ justifyContent: "center", marginTop: "20px" }}>
  <div style={{ width: "100%", maxWidth: "900px", aspectRatio: "1/1.3" }}>
    <iframe
      src="https://drive.google.com/file/d/1mHkooMsovo-DgarqJw3orWnD5bVXLyn8/preview"
      width="100%"
      height="100%"
      style={{ border: "none" }}
      title="Resume Preview"
    ></iframe>
  </div>
</Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
