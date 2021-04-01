import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom'

import Rectangles from '../components/Rectangles';

import coverPhoto from '../images/jamie.jpg';
import greyTexture from '../images/greyTexture.jpg';

import { BackgroundImage, PageFrame, Name } from '../components/styles'
import { useAudio } from '../contexts/AudioContext'

const WelcomeText = styled.div`
    padding-right: 8%;
    font-size: 1.5em;
`

const Links = styled.div`
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
    padding-bottom: 2vw;
`

const WelcomePage = () => {
    const { audioContextRef } = useAudio();

    return (
        <React.Fragment>
            <Rectangles />
            <PageFrame>
                <BackgroundImage img={greyTexture}>
                    <Name>jamie christopher webber</Name>
                    <button onClick={()=>{audioContextRef.current.close()}}>Stop sounds</button>
                    <div>
                        <Photo src={coverPhoto} alt="jcw"></Photo>
                        <div>
                            <WelcomeText>Hi, I'm a composer and creative programmer based out of Montreal, Canada. Thanks for visiting my website! I hope that you check out some of the microtonal music I compose or have a look at some of the tools I've programmed. I've got a blog that I add to sometimes as well. Enjoy!</WelcomeText>
                            <Links>
                                <LinkHolder><Link to="works"><StyledLink colour="chartreuse" background="lightsalmon">my music</StyledLink></Link></LinkHolder>
                                <LinkHolder><Link to="tools"><StyledLink colour="fuchsia" background="chartreuse">cool music tools</StyledLink></Link></LinkHolder>
                                <LinkHolder><Link to="blog"><StyledLink colour="salmon" background="aqua">my blog</StyledLink></Link></LinkHolder>
                            </Links>
                        </div>
                    </div>
                </BackgroundImage>
            </PageFrame>
        </React.Fragment>
        
    );
}

export default WelcomePage