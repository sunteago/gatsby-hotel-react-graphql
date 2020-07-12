import React from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`

const RoomPreview = ({room}) => {
    const { content, image, title, slug } = room;
    return ( 
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <Image fluid={image.fluid} />
            <div
                css={css`
                    padding: 3rem;
                `}
            >                
                <h3
                    css={css`
                        font-size: 3rem;
                    `}
                >{title}</h3>
                <p>{content}</p>

                <Button to={slug}>View room</Button>
            </div>
        </div>
     );
}
 
export default RoomPreview;