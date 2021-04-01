import React from 'react';
import styled from 'styled-components';

// const Background = styled.div`
//     padding: 0px;
//     background-image: url(${props => props.img});
//     background-size: ${props=> props.pattern || 'cover'};
//     top: 0px;
//     left: 0px;
//     height: 100%;
//     overflow: auto;
//     cursor: url(${props => props.cursor}),auto;
// `

export const BackgroundImage = styled.div`
    background-image: url(${props => props.img});
    background-repeat: true;
    padding: 6vh;
`

export const PageFrame = styled.div`
    padding: 6vh 15vw;
    width: 70vw;
`

// export const Background = styled.div`
//     background-image: url(${props => props.img});
//     background-repeat: true;
//     top: 6vh;
//     min-height: 74vh;
//     width: 75vw;
//     margin: 9vh auto;
//     padding: 4vh;
// `

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

