import React from 'react';
import styled from 'styled-components';
import coverPhoto from '../images/trebleclef.png';
import { Link } from 'react-router-dom';

const BigName = styled.h1`
    font: sans-serif;
    margin-top: 50px;
`

const StyledPhoto = styled.img`
    height: 150px;
    width: auto;
    flex: 1;
`

const BioCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 150px auto;
    padding: 25px;
    border: 1px solid black;
    border-radius: 3px;
`

const BioInfo = styled.div`
    flex: 1;
    display: flex;
    justify-content: left;
`

const LinkList = ({className}) => {
    return (
        <div className={className}>
            <Link to='/works'>WORKS</Link>
            <Link to='/tools'>TOOLS</Link>
            <Link to='/blog'>BLOG</Link>
            <Link to='/inprogress'>IN PROGRESS</Link>
        </div>
    )
}

const WelcomePage = () => {
    return (
        <div>
            <BigName>JAMIE CHRISTOPHER WEBBER</BigName>
            <BioCard>
                <StyledPhoto src={coverPhoto} alt='JCW'></StyledPhoto>
                <BioInfo>
                    Bio information
                </BioInfo>
            </ BioCard>
            <LinkList />
        </div>
    )
}

export default WelcomePage