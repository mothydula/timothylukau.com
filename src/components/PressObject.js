import React from "react"
import { Button } from "@material-ui/core"
import { Container, Row, Col } from "react-bootstrap"
const PressObject = (props) => {
    const title = props.title
    const link = props.link
    const publication = props.publication
    const pic = props.pic
    const animation = props.animation

    return (
        <Container data-aos={animation} style={{ marginTop: 20, borderStyle: "solid", borderColor: "white" }}>
            <Row style={{marginLeft: 0, marginRight: 0}}>
                <Col>
                    <h1 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white" }}>{publication}</h1>
                    <h2 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white", marginBottom: 20}}>"{title}"</h2>

                    <Button href={link} size="small"
                        style={{ textAlign: "center", width: 150, fontFamily: "Basis Grotesque Pro Bold", fontSize: 20, color: "white", textTransform: "capitalize", marginBottom: 20, border: "2px solid white", display: "block" }}
                    >
                        More here
                </Button>
                </Col>
                <Col style={{ display: "flex", alignItems: "center" }}><img className="pressImg" src={pic} style={{ maxHeight: 150, maxWidth: 300 }} /></Col>
            </Row>

        </Container>
    )
}

export default PressObject