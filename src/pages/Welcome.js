import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Rectangles from '../components/Rectangles';

import coverPhoto from '../images/jamie.jpg';
import greyTexture from '../images/greyTexture.jpg';

const Background = styled.div`
    background-image: url(${props => props.img});
    background-repeat: true;
    font-family: 'EB Garamond', serif;
    top: 6vh;
    min-height: 74vh;
    width: 75vw;
    margin: 9vh auto;
    padding: 4vh;
`



// const PinkRectangle = styled.div`
//     background-color: lightpink;
//     position: absolute;
//     right: 0px;
//     top: 60px;
//     width: 28%;
//     height: 26px;
// `

// const OrangeRectangle = styled.div`
//     background-color: #fac589;
//     position: absolute;
//     right: 0px;
//     top: 60px;
//     width: 28%;
//     height: 3px;
//     margin-top: 42px;
// `


const Name = styled.h1`
    font-size: max(1.5em, 4vw);
    position: relative;
    top: -4%;
    left: -10%;
    color: lightseagreen;
    margin-bottom: 3%;
`

const WelcomeText = styled.div`
    padding-right: 8%;
    font-size: 1.5em;
`

const Links = styled.div`
    padding-right: 8%;
    font-size: 1.5em;
    display: flex;
    justify-content: space-around;
    height: 50px;
    margin: 25px auto 50px auto;
`

const StyledLink = styled.span`
    white-space: nowrap;
    color: gray;
    &:hover {
        padding: 3px 8px;
        color : ${props => props.colour};
        background-color: ${props => props.background};
        font-size: 1.21em;
        position: relative;
        top: -3px;
        z-index: 3;
    }
`

const Photo = styled.img`
    width: 40%;
    float: left;
    margin-left: 8%;
    margin-right: 8%;
    margin-bottom: 5%;
`

const LinkHolder = styled.div`
    width:5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const WelcomePage = () => {

    document.body.style.backgroundColor = "honeydew";

    return (
        <React.Fragment>
            <Rectangles />
            {/* <PinkRectangle></PinkRectangle>
            <OrangeRectangle></OrangeRectangle> */}
            <Background img={greyTexture}>
                <Name>jamie christopher webber </Name>
                
                <div>
                    <Photo src={coverPhoto} alt="jcw"></Photo>
                    <div>
                        <WelcomeText>Hi, I'm a composer and creative programmer based out of Montreal, Canada. Thanks for visiting my website! I hope that you check out some of the microtonal music I compose or have a look at some of the tools I've programmed to do various musical tasks. I've got a blog that I add to sometimes as well. Enjoy!</WelcomeText>
                        <Links>
                            <LinkHolder><Link to="works"><StyledLink colour="chartreuse" background="lightsalmon">my music</StyledLink></Link></LinkHolder>
                            <LinkHolder><Link to="tools"><StyledLink colour="fuchsia" background="chartreuse">cool music tools</StyledLink></Link></LinkHolder>
                            <LinkHolder><Link to="blog"><StyledLink colour="salmon" background="aqua">my blog</StyledLink></Link></LinkHolder>
                        </Links>
                    </div>
                </div>
            </Background>
        </React.Fragment>
        
    );
}

export default WelcomePage