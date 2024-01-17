import Markdown from 'react-markdown'
//import testMd from '../../../Javascript/svelte/readme.md';
import testMd2 from '../../../podcasts.md';

const testMd = '../../../Javascript/svelte/readme.md';

export default function loadMarkdown (){
    fetch(testMd).then((resp) => {
        return resp.text()
    }).then((text) => {
        console.log('text', text);
        return (
            <>
                test:
                <Markdown>{text}</Markdown>  
            </>
        )
      });
  }