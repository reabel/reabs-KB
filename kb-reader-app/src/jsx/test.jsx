
import { useState } from 'react'

import testMd from '../../../podcasts.md';
//import testMd from '../../test.md';
import Markdown from 'react-markdown'


export default function Test () {
    const [markdown, setMarkdown] = useState(0)
    fetch(testMd).then((resp) => {
        return resp.text()
    }).then((text) => {
        console.log('text', text);
        setMarkdown(text);
      })
    return (
        <Markdown>{markdown}</Markdown>    
    );
}
