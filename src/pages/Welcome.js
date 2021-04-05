import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom'

import Rectangles from '../components/Rectangles';

import coverPhoto from '../images/jamie.jpg';
import greyTexture from '../images/greyTexture.jpg';

import { BackgroundImage, PageFrame, Name } from '../components/styles'
import { useAudio, useAudioRef, AudioPanicButton } from '../contexts/AudioContext'

const WelcomeText = styled.div`
    padding-right: 8%;
    font-size: 1.2em;
`

const WelcomeHeader = styled.div`
    font-size: 1.8em;
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
    console.log("render welcome page");
    const audioContext = useAudio();
    const audioContextRef = useAudioRef();

    return (
        <React.Fragment>
            <Rectangles />
            <PageFrame>
                <BackgroundImage img={greyTexture}>
                    <Name>jamie webber - composer & audio programmer</Name>
                    <div>
                        <Photo src={coverPhoto} alt="jcw"></Photo>
                        <div>
                            <WelcomeHeader>Hello! Bienvenue!</WelcomeHeader>
                            <WelcomeText>Welcome to my website. I'm a composer of microtonal music, I do creative programming and I have a blog called Solipsism and Lunacy where I write about binaries, and about the neuroscience of artistry. Thanks for stopping by and I hope you'll have a look around!</WelcomeText>
                            <Links>
                                <LinkHolder><Link to="bio"><StyledLink colour="crimson" background="gold">bio</StyledLink></Link></LinkHolder>
                                <LinkHolder><Link to="works"><StyledLink colour="chartreuse" background="lightsalmon">music</StyledLink></Link></LinkHolder>
                                <LinkHolder><Link to="tools"><StyledLink colour="fuchsia" background="chartreuse">tools</StyledLink></Link></LinkHolder>
                                <LinkHolder><Link to="blog"><StyledLink colour="salmon" background="aqua">blog</StyledLink></Link></LinkHolder>
                            </Links>
                        </div>
                    </div>
                </BackgroundImage>
            </PageFrame>
        </React.Fragment>
        
    );
}

export default WelcomePage