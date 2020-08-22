import React from "react";
import styled from "styled-components";
import WeirdImageGrid from "./WeirdImageGrid";
import ColumnThin from "./ColumnThin";
import SectionTitle from "./SectionTitle";
import Paragraph from "./Paragraph";
import ImageTall from "./ImageTall";
import ImageFull from "./ImageFull";

const Wrapper = styled.section`
   
    padding: 0 5% 2% 5%;
    display: flex;
    flex-direction: column;
    border-bottom-color: #cbcbcb;
    border-bottom-width: 1px;
    border-bottom-style: solid;

@media only screen and (min-width: 992px){
    flex-direction: row-reverse;
  
    }
`;


const Text = styled.div`
    align-item: start; 
    margin: 5% 0 5% 0;
    padding 0 5% 2% 5%;
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
         }
    }));
}

function getElements(e) {
    if(e.weird_image_grid) {
        return <WeirdImageGrid image={e.weird_image_grid}/>
    } else if (e.thin_column) {
        return (
            <ColumnThin>
                {getItems(e.thin_column)}
            </ColumnThin>)

    }
}

const UnderLineSectionReverse = (props) => (
    <Wrapper>
            {props.data.map((c, index) => {
                return getElements(c);
            })}
    </Wrapper>
)

export default UnderLineSectionReverse;
