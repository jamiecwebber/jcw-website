import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
    margin: 0px 30px;
    padding-bottom: 160px;
`

const Title = styled.h1`
    position: relative;
    top: 50px;
    left: 50px;
    color: black;
    font-family: sans-serif;
    font-size: 65px;
    margin-bottom: 0px;
`

const Slogan = styled.h2`
    position: absolute;
    top: 35px;
    right: 50px;
    color: silver;
    font-family: sans-serif;
    font-size: 50px;
    z-index: -1;
    text-wrap: none;
`

const Paragraph = styled.div`
    position: relative;
    top: 85px;
    color: black;
    font-family: sans-serif;
    font-size: 22px;
    padding-top: 0px;
    margin: 10px auto;
    max-width: 800px;
`

const BlogPage = () => {
    return (
        <Page>
            <Title>Solipsism and Lunacy</Title>
            <Slogan>a healthy outlet for male anger</Slogan>
            <Paragraph>
                Hi, welcome to my blog page. My name's Jamie, I do music and have some pretty passionate opinions about a few things. This page exists for me to put my thoughts into words and try to get to the bottom of a few things. I hope you find what I have to say somewhat interesting and I'm happy to talk about whatever it may be, lord knows that sometimes it's nice to get out of the bubble. So, enjoy, I guess, if you're the sort of person who reads these things.
            </Paragraph>
            <Paragraph>
                I try to live my life with good intentions, and just like everything else in the universe the way I interact with things and what I believe is ever-unfolding. I think that there's a profound beauty in sadness, and a profound sadness about beauty, and that, well, like, what is melancholy is somehow more real sometimes. But also I'm trying to find what is joyous and energetic as well, and so much of our lives just has to do with how we channel our own energies.
            </Paragraph>
            <Paragraph>
                There's just far too much to try to sum up everything here, all at once. So, I guess, keep checking back and I'll have a lot to say. Here's to having a medium.
            </Paragraph>
        </Page>
    )
}

export default BlogPage