import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`;

const ImgText = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.8), rgba(34,49,63,.8));
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 3.7rem;
        margin: 0;
        @media (min-width: 992px) {
            font-size: 5.8rem;
        }
    }
    p {
        font-size: 2rem;
        @media (min-width: 992px) {
            font-size: 2.6rem;
        }
    }
`

const HotelImage = () => {
    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "4.jpg"}) {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
    // console.log(image.sharp.fluid);
    return (
        <ImageBackground
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
        <ImgText>
            <h1>Welcome To Gatsby Hotel</h1>
            <p>The best place for your vacations</p>
        </ImgText>
        </ImageBackground>
    );
}

export default HotelImage;