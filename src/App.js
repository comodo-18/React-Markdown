import './App.css';
import styledComponents from 'styled-components';
import MarkedInput from './components/MarkedInput';
import Output from './components/Output';
import { useState } from 'react';
import EditorContext from './store/editor-context';

const AppContainer=styledComponents.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const Title=styledComponents.div`
font-size: 25px;
margin-bottom: 1rem;
font-weight: 700;
`;
const EditorContainer=styledComponents.div`
width: 100%;
height: 100%;
display: flex;
`

function App() {
  const [markdownText,setMarkdownText]=useState('')
  const ctxValue={
    markdownText,
    setMarkdownText
  }
  return (
    <EditorContext.Provider value={ctxValue}>
    <AppContainer>
    <Title>Mardown Editor</Title>
    <EditorContainer>
      <MarkedInput />
      <Output />
    </EditorContainer>
    </AppContainer>
    </EditorContext.Provider>
  );
}

export default App;
