import './App.css'
import Test from './test';
import Menu from './menu';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Menu />
      <Test />
    </ChakraProvider>
  )
}

export default App
