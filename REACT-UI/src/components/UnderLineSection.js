import React from 'react';
import styled, {css} from 'styled-components';
import SectionTitle from "./SectionTitle";
import Paragraph from "./Paragraph";
import Team from "./Team";
import Video from "./Video";
import ImageFull from "./ImageFull";
import ColorBack from "./ColorBack";
import ImageTall from "./ImageTall";
import RowReverse from "./RowReverse";
import Row from "./Row";
import RowNoFlex from "./RowNoFlex";
import ImageColumn from "./ImageColumn";
import ColumnThin from "./ColumnThin";

const Wrapper = styled.section`
    align-item: start; 
    margin: 5% 0 5% 0;
    padding 0 0 2% 0;
`;
const Text = styled.div`
    align-item: start; 
    margin: 5% 0 5% 0;
    padding 0 5% 2% 5%;
@media only screen and (min-width: 992px){
    width: 50%;
   
}
`;

const Underline = styled.section`
    border-bottom-color: #cbcbcb;
    border-bottom-width: 1px;
    border-bottom-style: solid;
`;

function getItems(e){
   return ( e.map((i, index)=>{
         if (i.section_title) {
        return <SectionTitle title={i.section_title}/>
    } else if (i.paragraph) {
        return <Paragraph text={i.paragraph}/>
    }else if(i.image_tall){
        return <ImageTall image={i.image_tall}/>
    }else if(i.image_full) {
             return <ImageFull src={i.image_full}/>
         }else if(i.text){
             return (
                 <Text>
                 {getItems(i.text)}
                 </Text>
             )
         }else if(i.image_column){
             return (
                 <ImageColumn>
                     {getItems(i.image_column)}
                 </ImageColumn>
             )
         }else if(i.thin_column){
             return(
                 <ColumnThin>
                     {getItems(i.thin_column)}
                 </ColumnThin>
             )
         }
    }));
}

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
    }else if(element.image_row){
       return ( <Row>
            {getItems(element.image_row)}
        </Row>)
    }else if(element.image_row_reverse){
       return( <RowReverse>
            {getItems(element.image_row_reverse)}
        </RowReverse>)
    }else if(element.image_row_no_flex){
        return (<RowNoFlex>
            {getItems(element.image_row_no_flex)}
        </RowNoFlex>)
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