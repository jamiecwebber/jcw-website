import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js'

const CTWindow = styled.div`
    margin: 15px auto;
    width: 90vw;
    height: calc(90vh - 3em);
    border: 1px solid gray;
`

const CTCalculator = () => {
    return (
        <>
            <Header />
            <CTWindow>
                This page is a work in progress :)
                {/* controls at top left */}
                {/* actual display grid */}
            </CTWindow>
        </>
    )
}

export default CTCalculator