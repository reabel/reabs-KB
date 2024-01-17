
import { useState } from 'react'

//import testMd from '../../../podcasts.md';
//import testMd from '../../test.md';
//import reactMD from '../../../Javascript/react/sandbox/recipe/README.md'
import Markdown from 'react-markdown' //uses spec.commonmark.org
const testUrl = '/markdown/test.md'; //this works because test.md is within public directory.

export default function Test () {
    const [markdown, setMarkdown] = useState('')
    fetch(testUrl).then((resp) => {
        return resp.text()
    }).then((text: string) => {
        console.log('text', text);
        setMarkdown(text);
      })
    return (
        <Markdown>{markdown}</Markdown>    
    );
}
