import React from 'react';
import styled, {css} from 'styled-components';
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";

const Wrapper = styled.section`
    margin: 5% 0 5% 0;
    padding: 0 5% 2% 5%;
    display: flex;
    flex-flow: row wrap;
`;

const Column = styled.div`
    padding: 0;
    width: 50%;
    height: 100%;
    
`;
const Title = styled.div`
    text-align: left;
    font-family: Times New Roman, serif;
    font-size: 30px;
    color: #000002;
    font-weight: lighter;
    margin: 0;
`;

const Team = (props) => (
    <Wrapper>
          {props.data.map((d, index)=>{
               if(d.role) {
                  return (
                      <Column>
                            <SectionTitle title="My Role"/>
                            {d.role.map((r, index)=>{
                                   return <Paragraph text={r}/>
                            })}
                      </Column>
                  )
               }else if(d.members){
                  return (
                        <Column>
                            <SectionTitle title="Team" />
                            {d.members.map((r, index)=>{
                                   return <Paragraph text={r}/>
                            })}
                        </Column>
                  )
               }
            })}
    </Wrapper>
)

export default Team;