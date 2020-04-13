import React from "react"
import { Button } from "@material-ui/core"
import { Container, Row, Col } from "react-bootstrap"
const Creative = ()=>{
    return(
        <Row style={{margin: 15}}>
        <Container data-aos="fade-in" data-aos="zoom-in" style={{ marginTop: 20, borderStyle: "solid", borderColor: "white" }}>
            <Row style={{marginLeft: 0, marginRight: 0}}>
                <Col>
                    <h1 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white" }}>MothBall LLC</h1>
                    <h2 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white", marginBottom: 20}}>Founded by and site developed by yours truly.</h2>

                    <Button href="https://moth-ball.com" size="small"
                        style={{ textAlign: "center", width: 150, fontFamily: "Basis Grotesque Pro Bold", fontSize: 20, color: "white", textTransform: "capitalize", marginBottom: 20, border: "2px solid white", display: "block" }}
                    >
                        Visit
                </Button>
                </Col>
                <Col style={{ display: "flex", alignItems: "center" }}><img className="pressImg" src={require("./Assets/mothball-screenshot.PNG")} style={{ maxHeight: 300, maxWidth: 300 }} /></Col>
            </Row>

        </Container>
        <Container data-aos="fade-in" data-aos="zoom-in" style={{ marginTop: 20, borderStyle: "solid", borderColor: "white" }}>
            <Row style={{marginLeft: 0, marginRight: 0}}>
                <Col>
                    <h1 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white" }}>My Spotify</h1>
                    <h2 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white", marginBottom: 20}}>A small yet impactful selection of my many compostions</h2>

                    <Button href="https://open.spotify.com/artist/3vtC6VrYpSkmimxbT7csD1?si=u_t1iz2ORDGoqZE_e5Sg8g" size="small"
                        style={{ textAlign: "center", width: 150, fontFamily: "Basis Grotesque Pro Bold", fontSize: 20, color: "white", textTransform: "capitalize", marginBottom: 20, border: "2px solid white", display: "block" }}
                    >
                        Visit
                </Button>
                </Col>
                <Col style={{ display: "flex", alignItems: "center" }}><img className="pressImg" src={require("./Assets/spotify-photo-2.PNG")} style={{ maxHeight: 300, maxWidth: 300 }} /></Col>
            </Row>

        </Container>
        <Container data-aos="fade-in" data-aos="zoom-in" style={{ marginTop: 20, borderStyle: "solid", borderColor: "white" }}>
            <Row style={{marginLeft: 0, marginRight: 0}}>
                <Col>
                    <h1 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white" }}>My Soundcloud</h1>
                    <h2 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white", marginBottom: 20}}>A larger, more personal, more raw selection of my many compostions. Mostly sample-based works.</h2>

                    <Button href="https://soundcloud.com/mothydula/" size="small"
                        style={{ textAlign: "center", width: 150, fontFamily: "Basis Grotesque Pro Bold", fontSize: 20, color: "white", textTransform: "capitalize", marginBottom: 20, border: "2px solid white", display: "block" }}
                    >
                        Visit
                </Button>
                </Col>
                <Col style={{ display: "flex", alignItems: "center" }}><img className="pressImg" src={require("./Assets/soundcloud-photo.PNG")} style={{ maxHeight: 300, maxWidth: 300 }} /></Col>
            </Row>

        </Container>
        </Row>
    )
}

export default Creative