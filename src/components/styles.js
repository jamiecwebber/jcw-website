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
    background-repeat: round;
`

export const PageFrame = styled.div`
    padding: 6vh 15vw;
    width: 70vw;
`

export const Name = styled.h1`
    padding: 2vw 0vw 0vw 3vw;
    font-size: max(1.5em, 4vw);
    color: lightseagreen;
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

