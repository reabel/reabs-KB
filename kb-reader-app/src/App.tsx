import './App.css'
import Test from './test';
import KBMenu from './kbmenu';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <KBMenu />
      <Test />
    </ChakraProvider>
  )
}

export default App
