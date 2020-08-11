import React, {Component, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
    max-width: 100%;
    width: 100%;
    height: auto;
    overflow: hidden;
`;

const Video = (props) =>{
    <Container>
        <video preload=none controls="play/pause"
               loop='loop' autoplay=autoplay poster={props.poster}>
            <source src={props.src} type="video/mp4"/>
        </video>
    </Container>

}

export default Video;