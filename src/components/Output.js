import React from 'react'
import styledComponents from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { useContext } from 'react';
import EditorContext from '../store/editor-context';

const Container=styledComponents.div`
width: 50%;
height: 100%;
padding 13px;
`;
const Title=styledComponents.div`
font-size: 20px;
font-weight: 600;
padding: 10px 0;
border-bottom: 1px solid black;
text-align: center;
margin-bottom: 1rem 
`

const OutputArea=styledComponents.div`
width:100%;
height: 100%;
border: none;
font-size: 15px
`

function Output() {
   const {markdownText}= useContext(EditorContext)
  return (
    <Container>
        <Title>Converted Text</Title>
        <OutputArea>
            <ReactMarkdown children={markdownText}/>
        </OutputArea>
    </Container>
  )
}

export default Output