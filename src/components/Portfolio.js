import React, { useEffect, useState, useRef } from "react"
import { Button } from "@material-ui/core"
import { Container, Row, Col } from "react-bootstrap"
import AOS from 'aos';
import Pulse from 'react-reveal/Pulse';
import ReactPlayer from 'react-player'
import $ from "jquery";
const Portfolio = () => {

    const temiRef = useRef();
    const mothballRef = useRef();
    const melaninRef = useRef();
    const[showTemi, setShowTemi] = useState(false)
    const[showMothball, setShowMothball] = useState(false)
    const[showMelanin, setShowMelanin] = useState(false)

    const [hovered, setHovered] = useState(false);
    
    const scrollToRef = (ref) => {ref.current.scrollIntoView({behavior: 'smooth'})}

    useEffect(() => {
        AOS.init();
        hide()
    }, [])


    const hoverPulseEvent = () => {
        setHovered(true)
        setTimeout(() => {
            setHovered(false)
        }, 1000);
    }

    const hide = () => {
        temiRef.current.style.display = "none"
        mothballRef.current.style.display = "none"
        melaninRef.current.style.display = "none"
    }

    return (
        <Col>
            
                <Container data-aos="fade-in" style={{ marginTop: 20, borderStyle: "solid", borderColor: "white", marginBottom: 20}} id="portfolioContainer" onMouseEnter={hoverPulseEvent}>
                    <Row style={{}}>
                        <Col><h1 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white" }}>Portfolio</h1></Col>
                        <Col style={{padding: "15 15 15 15"}}>
                            <Button
                                onClick={()=>{hide(); setShowTemi((oldVal)=>!oldVal); setShowMothball(false); setShowMelanin(false); scrollToRef(temiRef);}}
                                size="large"
                                style={{ fontFamily: "Basis Grotesque Pro Bold", fontSize: 20, color: "white", textTransform: "capitalize", marginTop: 20, marginBottom: 20, border: "2px solid white", display: "block" }}
                            >
                                Temi
                            </Button>
                            <Button
                                onClick={()=>{hide(); setShowMothball((oldVal)=>!oldVal); setShowTemi(false); setShowMelanin(false); scrollToRef(mothballRef);}}
                                size="large"
                                style={{ fontFamily: "Basis Grotesque Pro Bold", fontSize: 20, color: "white", textTransform: "capitalize", marginBottom: 20, border: "2px solid white", display: "block" }}
                            >
                                Mothball, LLC
                            </Button>
                            <Button
                                onClick={()=>{hide(); setShowMelanin((oldVal)=>!oldVal); setShowMothball(false); setShowTemi(false); scrollToRef(melaninRef);}}
                                size="large"
                                style={{ fontFamily: "Basis Grotesque Pro Bold", fontSize: 20, color: "white", textTransform: "capitalize", marginBottom: 20, border: "2px solid white", display: "block" }}
                            >
                                Sounds of Melanin
                             </Button>
                        </Col>
                    </Row>

                </Container>
           
            <Container data-aos="fade-in" ref={temiRef} id="temi-container" data-aos="zoom-in" style={{ marginTop: 20, borderStyle: "solid", borderColor: "white", display: (showTemi?"block":"none"), marginBottom: 20}} id="portfolioContainer" onMouseEnter={hoverPulseEvent}>
                <Row style={{ padding: 15 }}><h1 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white" }}>Temi</h1></Row>
                <Row>
                    <Col style={{ marginBottom: 20 }}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=6eW7SWHq69c" width="100" style={{ borderStyle: "solid", borderColor: "white", display: "inline-block" }} />
                    </Col>
                    <Col>
                        <p style={{ color: "white", fontSize: 20, fontFamily: "Basis Grotesque Pro Bold", }}>Temi is a personal robot that I was tasked with developing applications for at the behest of The College of Africana Studies at the University of Arizona. I did this work as a Software developer for Tech Core. My work spanned about 5 months.</p>
                        <p style={{ color: "white", fontSize: 20, fontFamily: "Basis Grotesque Pro Bold", }}>Stack:</p>
                        <ul style={{ color: "white", fontSize: 20, fontFamily: "Basis Grotesque Pro Bold", }}>
                            <li>Android Studio/Java</li>
                            <li>SQL Server</li>
                            <li>C#/ASP.NET/Javascript (For Web Client)</li>
                        </ul>
                    </Col>
                </Row>

            </Container>
            <Container data-aos="fade-in" ref={mothballRef} id="mothball-container" data-aos="zoom-in" style={{ marginTop: 20, borderStyle: "solid", borderColor: "white", display: (showMothball?"block":"none"), marginBottom: 20}} id="portfolioContainer" onMouseEnter={hoverPulseEvent}>
                <Row style={{ padding: 15 }}><h1 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white" }}>Mothball, LLC</h1></Row>
                <Row>
                    <Col>
                        <p style={{ color: "white", fontSize: 20, fontFamily: "Basis Grotesque Pro Bold", }}>Mothball, LLC is an LLC that I created to serve as a creative outlet for artists that I believe have creativity and a vision, but lack the proper outlet.</p>
                        <p style={{ color: "white", fontSize: 20, fontFamily: "Basis Grotesque Pro Bold", }}>Learn more&nbsp;<Button href="https://moth-ball.com" style={{ color: "white", fontSize: 20, fontFamily: "Basis Grotesque Pro Bold", textTransform: "lowercase", marginTop: 20, marginBottom: 20, border: "2px solid white"}}>here</Button></p> 
                    </Col>
                </Row>

            </Container>
            <Container data-aos="fade-in" ref={melaninRef} id="melanin-container" data-aos="zoom-in"  style={{ marginTop: 20, borderStyle: "solid", borderColor: "white", display: (showMelanin?"block":"none"), marginBottom: 20}} id="portfolioContainer" onMouseEnter={hoverPulseEvent}>
                <Row style={{ padding: 15 }}><h1 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white" }}>Sounds of Melanin</h1></Row>
                <Row>
                    <Col>
                        <p style={{ color: "white", fontSize: 20, fontFamily: "Basis Grotesque Pro Bold", }}>Sounds of Melanin is an experience that premiered at the Tucson TenwestFest in October 2019. My role in this creative endeavour was to produce (compostion) and executively produce (arrangement) the background music for select scenes. As a person of color, this was an enriching endeavour that allowed me to use my skills to help expose the world to a little bit more of my identity.</p>
                        <p style={{ color: "white", fontSize: 20, fontFamily: "Basis Grotesque Pro Bold", }}>Learn more&nbsp;<Button href="https://tenwest.com/session/sounds-of-melanin/" style={{ color: "white", fontSize: 20, fontFamily: "Basis Grotesque Pro Bold", textTransform: "lowercase", marginTop: 20, marginBottom: 20, border: "2px solid white"}}>here</Button></p>
                    </Col>
                </Row>

            </Container>
        </Col>
    )
}

export default Portfolio