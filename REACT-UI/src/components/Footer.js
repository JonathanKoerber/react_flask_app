
import React from 'react';
import styled, {css} from 'styled-components'

// style for heading component
const Wrapper = styled.footer`
    background-color: #000000;
    height: auto;
    padding: 10% 0% 0 10%;
    margin-left: 0em;
`;
const Container = styled.div`
  padding: .5em;
`;
const Email = styled.h5`
    font-size: 2em;
    font-family: "Helvetica Nue", sans-serif;
    font-weight: bolder;
    font-size: 1em;
    color: #ffffff;
`;
const Social = styled.h6`
    font-family: "Helvetica Nue", sans-serif;
    font-size: .8em;
    font-weight: lighter;
    color: #ffffff;
`;
const Link = styled.a`
    text-decoration: none;
    color: white;
`;

const Footer = () =>(
        <Wrapper>
            <Container>
                <Email >Say Hello</Email>
                <Social>
                    <Link href="mailto:bezarstudio@gmail.com"
                                                     target="_blank">bezarstudio@gmail.com</Link>
                </Social>
                <Social>
                    <Link href="https://www.instagram.com/celeryroot_pnw/"
                                                       target="_blank">Instagram</Link>
                </Social>
                <Social ><Link href="https://www.facebook.com/bezarstudio"
                                                    target="_blank">Facebook</Link></Social>
            </Container>
        </Wrapper>
)

export default Footer