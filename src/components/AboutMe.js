import React, { useEffect, useState } from "react"
//import { Container, Grid } from "@material-ui/core"
import { Container, Row, Col } from "react-bootstrap"
import AOS from 'aos';
import Pulse from 'react-reveal/Pulse';
const AboutMe = () => {
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        AOS.init();
    }, [])


    const hoverPulseEvent = ()=>{
        setHovered(true)
        setTimeout(() => {
            setHovered(false)
          }, 1000);
    }

    return (
            <Col>
            <Container data-aos="zoom-in" style={{ marginTop: 20, borderStyle: "solid", borderColor: "white"}} id="aboutContainer" onMouseEnter={hoverPulseEvent}>
                <Row style={{padding: 15}}><h1 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white" }}>About Me</h1></Row>
                <Row style={{ }}>
                    <Col id="aboutMeParagraph"><p style={{ color: "white", fontSize: 20, fontFamily: "Basis Grotesque Pro Bold", }}>My name is Timothy Luyindula Lukau, but I go by Tim most of the time.
                    I'm an artist (music production, film production, software development). At the time of writing this I'm 22 years old and will be graduating from the University of Arizona December 2020.</p></Col>
                </Row>

            </Container>
            </Col>
    )
}

export default AboutMe