import React from 'react'
 
const EditorContext=React.createContext({
    markdownText: '',
    setMarkdownText: ()=>{}
})
export default EditorContext