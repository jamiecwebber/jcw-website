import React from 'react';
import styled from 'styled-components';


const PinkRectangle = styled.div`
background-color: lightpink;
position: absolute;
right: 0px;
top: 97px;
width: 28%;
height: 42px;
`

// const OrangeRectangle = styled.div`
// background-color: #fac589;
// position: absolute;
// right: 0px;
// top: 97px;
// width: 28%;
// height: 3px;
// margin-top: 42px;
// `

const Rectangles = () => {
    return (
        <React.Fragment>
            <PinkRectangle />
        </React.Fragment>
    )
}

export default Rectangles