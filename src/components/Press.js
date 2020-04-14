import React from "react"
import PressObject from "./PressObject"
import { Container, Row, Col, Jumbotron} from "react-bootstrap"
const Press = ()=>{
    const pressInfo = [{id: 1, publication: "UANews", title: "Nano 2020: Scaling Up Nanotechnology in Virtual Reality", link: "https://uanews.arizona.edu/story/nano-2020-scaling-nanotechnology-virtual-reality", pic: require("./Assets/uanews-logo.svg")}, {id: 2, publication: "The Daily Wildcat", title: "Africana Studies Program's new robot combines humanities and technology", link: "https://www.wildcat.arizona.edu/article/2019/09/n-robot-secretary", pic: require("./Assets/daily-wildcat-logo.png")}, {id: 3, title: "TENWEST Impact Festival: Sounds of Melanin and more", publication: "KGUN9 (Tucson)", link: "https://www.kgun9.com/the-morning-blend/tenwest-impact-festival-sounds-of-melanin-and-more", pic: require("./Assets/kgun-logo.png")}, {id: 4, publication: "The Daily Wildcat", title: "Waves in the desert", link: "https://www.wildcat.arizona.edu/article/2019/04/a-engraves-show", pic: require("./Assets/daily-wildcat-logo.png")}]

    return(
        <div style={{marginBottom: 20}}>
        <Container><h1 style={{ fontFamily: "Basis Grotesque Pro Bold", color: "white" }}>Press</h1></Container>
        <Col>
        {pressInfo.map((props, index)=>
            <PressObject animation={(index%2===0)?("fade-right"):("fade-left")} publication={props.publication} title={props.title} link={props.link} pic={props.pic}/>
        )}
       </Col>
        </div>
    )
}

export default Press