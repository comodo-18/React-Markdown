import {React,useContext} from 'react'
import styledComponents from 'styled-components'
import EditorContext from '../store/editor-context'

const Container=styledComponents.div`
width: 50%;
height: 100%;
padding: 13px;
border-right: 1.5px solid rgba(15,15,15,0.4)
`

const Title=styledComponents.div`
font-size: 20px;
font-weight: 600;
padding: 10px 0;
border-bottom: 1px solid black;
text-align: center;
margin-bottom: 1rem 
`
const TextArea=styledComponents.textarea`
width: 100%;
height: 100%;
resize: none;
border: none;
outline: none;
font-size: 15px
`

function MarkedInput(props) {
    const {markdownText,setMarkdownText}=useContext(EditorContext)

    function changeHandler(event){
        const newValue=event.target.value
        setMarkdownText(newValue)
    }

  return (
   <Container>
       <Title>Mardown Text</Title>
       <TextArea onChange={changeHandler} value={markdownText}/>
   </Container>
  )
}

export default MarkedInput