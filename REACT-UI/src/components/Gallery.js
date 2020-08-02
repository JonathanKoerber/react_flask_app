import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import Project from "./Project";

const Figure = styled.figure`
    margin: 0;
    padding: 0;
     display: flex;
    flex-flow: row wrap;

`;
const Row = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
@media only screen and (min-width: 992px){
    display: flex;
    flex-direction: row;
    }
`;


class Gallery extends Component{

content = [
    {'title': "Prime Day", 'image':  'static/images/prime_day//pdc_desktop_hero_image.png', "href": "#"},
    {'title': "OFT", 'image': 'static/images/oprah_fav//oft_desktop_hero_image.png', "href": "#"},
    {'title': "Flair", 'image': 'static/images/flair//flair_desktop_hero_image.png', "href": "#"},
    {'title': "Amazon Pets", 'image': 'static/images/pets//pets_desktop_hero_image.png', "href": "#"}
    ]
    render(){
        return(
            <Figure>
        {this.props.map(t => (
            <Project project_title={t.title} project_img={t.image}/>
        ))}
    </Figure>
        );
    }
}


export default Gallery;
