import React from 'react';
import styled from 'styled-components';

import Rectangles from '../components/Rectangles'
import Header from '../components/Header'

const Page = styled.div`
    margin: 0px 30px;
    padding-bottom: 160px;
`

const Title = styled.h1`
    position: relative;
    top: 60px;
    left: 50px;
    color: rgba(1,1,1,0.7);
    font-family: sans-serif;
    font-size: 75px;
    margin-bottom: 0px;
`

const Slogan = styled.h2`
    position: absolute;
    top: 46px;
    right: 80px;
    color: rgba(1,1,1,0.15);
    font-family: sans-serif;
    font-size: 55px;
    z-index: -1;
`

const Paragraph = styled.div`
    position: relative;
    top: 85px;
    color: color: rgba(1,1,1,0.9);
    font-family: 'Noto Sans HK', sans-serif;
    font-size: 22px;
    padding-top: 10px;
    margin: 30px auto;
    max-width: 800px;
`

const BlogPage = () => {

    document.body.style.backgroundColor = "ghostwhite";

    return (
        <Page>
            <Header/>
            <Rectangles />
            <Title>Solipsism and Lunacy</Title>
            <Slogan>balancing structure and subjectivity</Slogan> {/*a healthy outlet for male anger */}
            <Paragraph>
                Hi, welcome to my blog page. My name's Jamie, I do music and have some pretty passionate opinions about a few things. This page exists for me to put my thoughts into words and try to get to the bottom of some of the ideas that eat away at me. I hope you find what I have to say somewhat interesting and I'm happy to talk about whatever it may be, lord knows that sometimes it's nice to get out of the bubble. So, enjoy, I guess, if you're the sort of person who reads these things.
            </Paragraph>
            <Paragraph>
                This blog is about the sun and the moon, metaphorically speaking, as they represent symbolically a dyad, a dualism of illumination and occlusion, clarity and illusion, of the objective and subjective experiences that define us in our humanity as deeply divided beings. Each of us falls somewhere on the spectrum and forms some constellation of interbalanced forces that shape us and the world around us through our relationships and interactions...
            </Paragraph>
            <Paragraph>
                I try to live my life with good intentions, and just like everything else in the universe the way I interact with things and what I believe is ever-unfolding. I think that there's a profound beauty in sadness, and a profound sadness about beauty, and that, well, like, what is melancholy is somehow more real sometimes. But also I'm trying to find what is joyous and energetic as well, and so much of our lives just has to do with how we channel our own energies.
            </Paragraph>
            <Paragraph>
                There's just far too much to try to sum up everything here, all at once. So, I guess, keep checking back and I'll have a lot to say. I'm kinda new at this. Here's to having a medium.
            </Paragraph>
         </Page>
    )
}

export default BlogPage