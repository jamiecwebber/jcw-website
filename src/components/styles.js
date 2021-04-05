// import React from 'react';
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
    background-repeat: round;
    height: 100%;
    width: 100%;
`

export const PageFrame = styled.div`
    padding: 6vh 15vw;
    width: 70vw;
    height: 84vh;
`

export const Name = styled.div`
    padding: 2vw 0vw 2vw 3vw;
    font-size: max(1.5em, 3vw);
    color: lightseagreen;
    text-shadow: 7px -7px 5px lightpink;
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

