import React from 'react';
import styled, {css} from 'styled-components';
import SectionTitle from "./SectionTitle";
import Paragraph from "./Paragraph";
import Team from "./Team";
import Video from "./Video";
import ImageFull from "./ImageFull";
import ColorBack from "./ColorBack";


const Wrapper = styled.section`
    align-item: start; 
    margin: 5% 0 5% 0;
    padding 0 5% 2% 5%;
  
`;
// const Row = styled.div`
//     padding: 0;
//     margin: 0;
//     display: flex;
//     flex-direction: column;
// @media only screen and (min-width: 992px){
//     display: flex;
//     flex-direction: row;
//     }
// `;
const Underline = styled.section`
    border-bottom-color: #cbcbcb;
    border-bottom-width: 1px;
    border-bottom-style: solid;
`;
// todo { image_section, blue_back, image_full, reverse
// todo image_tall image_grid image_half video
function getComponent(element) {
    if (element.section_title) {
        return <SectionTitle title={element.section_title}/>
    } else if (element.paragraph) {
        return <Paragraph text={element.paragraph}/>
    }else if(element.team){
        return <Team data={element.team}/>
    }else if(element.color_back){
        return <ColorBack image={element.color_back}/>
    }else if(element.image_full){
        return <ImageFull src={element.image_full}/>
    }else if(element.video){
        return <Video video={element.video}/>
    }

}

const UnderLineSection = (props) =>(

    <Wrapper>
        <Underline>

            {props.data.map((o, index)=>{
                 return getComponent(o);

            })}
        </Underline>
        </Wrapper>
)

export default UnderLineSection;