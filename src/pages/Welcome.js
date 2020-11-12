import React from 'react';
import styled from 'styled-components';
import coverPhoto from '../images/jamie.jpg';
import greyTexture from '../images/greyTexture.jpg';
import { Link } from 'react-router-dom';

const Background = styled.div`
    background-image: url(${props => props.img});
    background-repeat: true;
    
    font-family: 'EB Garamond', serif;
    top: 6vh;
    height: 74vh;
    width: 75vw;
    margin: 9vh auto;
    padding: 4vh;
    overflow: auto;
`



const PinkRectangle = styled.div`
    background-color: lightpink;
    position: absolute;
    right: 0px;
    width: 28%;
    height: 26px;
`

const OrangeRectangle = styled.div`
    background-color: #fac589;
    position: absolute;
    right: 0px;
    width: 28%;
    height: 3px;
    margin-top: 42px;
`


const Name = styled.h1`
    font-size: max(1.5em, 4vw);
    position: relative;
    top: -3%;
    left: -10%;
    color: lightseagreen;
    margin-bottom: 3%;
`

const WelcomeText = styled.div`
    padding-right: 8%;
    padding-bottom: 4%;
    font-size: 1.5em;
`

const Links = styled.div`
    font-size: 1.5em;
    padding-right: 8%;
`

const Photo = styled.img`
    width: 40%;
    float: left;
    margin-left: 8%;
    margin-right: 8%;
    margin-bottom: 5%;
`

const WelcomePage = () => {

    document.body.style.backgroundColor = "honeydew";

    return (
        <Background img={greyTexture}>
            <PinkRectangle></PinkRectangle>
            <OrangeRectangle></OrangeRectangle>
            <Name>jamie christopher webber </Name>
            
            <div>
                <Photo src={coverPhoto} alt="jcw"></Photo>
                <div>
                    <WelcomeText>Hi, I'm a composer and creative programmer based out of Montreal, Canada. Thanks for visiting my website! I hope that you check out some of the microtonal music I compose or have a look at some of the tools I've programmed to do various musical tasks. I've got a blog that I add to sometimes as well. Enjoy!</WelcomeText>
                    <Links>links links links
                    
                    </Links>
                </div>
            </div>
        </Background>
        
    );
}

export default WelcomePage