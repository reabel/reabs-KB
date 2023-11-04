
import { useState } from 'react'

//import testMd from '../../../podcasts.md';
//import testMd from '../../test.md';
import reactMD from '../../../Javascript/react/sandbox/recipe/README.md'
import Markdown from 'react-markdown'


export default function Test () {
    const [markdown, setMarkdown] = useState(0)
    fetch(reactMD).then((resp) => {
        return resp.text()
    }).then((text) => {
        console.log('text', text);
        setMarkdown(text);
      })
    return (
        <Markdown>{markdown}</Markdown>    
    );
}
