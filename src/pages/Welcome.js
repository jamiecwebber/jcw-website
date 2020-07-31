import React from 'react';
import styled from 'styled-components';
import coverPhoto from '../images/trebleclef.png';
import { Link } from 'react-router-dom';

const BigName = styled.h1`
    font: sans-serif;
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
    padding: 25px;
    border: 1px solid black;
    border-radius: 8px;
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

const StyledLinkList = styled(LinkList)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    & > * {
        font-size: 26px;
        border: 1px solid gray;
        padding: 15px;
        border-radius: 8px;
    }
`

const StyledPage = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const WelcomePage = () => {
    return (
        <StyledPage>
            <BigName>JAMIE CHRISTOPHER WEBBER</BigName>
            <BioCard>
                <StyledPhoto src={coverPhoto} alt='JCW'></StyledPhoto>
                <BioInfo>
                    Bio information
                </BioInfo>
            </ BioCard>
            <StyledLinkList />
        </StyledPage>
    )
}

export default WelcomePage