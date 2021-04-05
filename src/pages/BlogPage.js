import React from 'react';
import styled from 'styled-components';

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
    color: rgba(1,1,1,0.9);
    font-family: 'Noto Sans HK', sans-serif;
    font-size: 22px;
    padding-top: 10px;
    margin: 30px auto;
    max-width: 800px;
`

const Love = styled.text`
    color: crimson;
`

const Power = styled.text`
    color: DarkBlue;
`

const Justice = styled.text`
    color: DarkMagenta;
`

const BlogPage = () => {

    document.body.style.backgroundColor = "ghostwhite";

    return (
        <Page>
            <Title>Solipsism and Lunacy</Title>
            {//<Slogan>balancing structure and subjectivity</Slogan>
            }
            <Paragraph>
                I've come to think of as "solar" a viewpoint that present itself as logical, rational, orderly, structured, linear, binary, categorical and decisive. I think of as "lunar" the points of view that are emotional, intuitive, chaotic, fluid, non-linear, pluralistic, transcendent and ephemeral. For the person who's become completely solipsistic all that there really is is <Power>POWER</Power>, and for the lunatic all that exists any more is <Love>LOVE</Love>.
            </Paragraph>
            <Paragraph>
                This is a binary that has very often been mapped onto the gender binary of male and female. My words have often been misinterpreted for this reason. There is a lot to be said on this subject, surely entire books yet to be written, and hopefully I can unpack some of this here within the safe and fair confines of my own writing space. These are words that have a lot of meaning to a lot of people and it's absolutely necessary to tread lightly as a result.
            </Paragraph>
            <Paragraph>
                The interesting irony of this is that to divide things between a philosophy of the Sun and the Moon is itself a binary, categorical distinction that is only really tenible in the light of day. Thus this blog also necessarily contains <i>all that is left unsaid</i>, the impossible shadow-side of the language that exists between the words and only in feelings and textures surrounding the experience. These things have been spoken of a million times in as many different ways all through history and all around the world.
            </Paragraph>
            <Paragraph>
                My belief is summed up in a twisting, or maybe not such a twisting, of the words and meaning of Martin Luther King Jr. - '<Power>Power</Power> without <Love>love</Love> is reckless and abusive, and <Love>love</Love> without <Power>power</Power> is sentimental and anemic.  <Power>Power</Power> at its best is <Love>love</Love> implementing the demands of <Justice>justice</Justice>, and <Justice>justice</Justice> at its best is <Power>power</Power> correcting everything that stands against <Love>love</Love>.'
            </Paragraph>

         </Page>
    )
}

export default BlogPage