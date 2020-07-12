import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import {css} from '@emotion/core';

const Content = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    display: grid;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2 , 1fr);
        column-gap: 3rem;
    }
    p {
        line-height: 2;
        margin-top: 2rem;
    }
`

const ContentAboutUs = () => {
    const result = useStaticQuery(graphql`
    query {
        allDatoCmsPage(filter: { slug : { eq: "aboutus" } }){
            nodes {
                title
                content
                image {
                    fluid ( maxWidth: 1200 ) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
    `);
    // console.log(result.allDatoCmsPage.nodes[0]);
    const { title, content, image } = result.allDatoCmsPage.nodes[0];
    return (
        <>
            <h2
                css={css`
                    margin-top: 4rem;
                    text-align: center;
                    font-size: 4rem;
                `}
            >{title}</h2>
            <Content>
                <p>{content}</p>
                <Image fluid={image.fluid} />
            </Content> 
        </>
    )

};

export default ContentAboutUs;