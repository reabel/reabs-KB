import { useState } from 'react'
import './App.css'
import Test from './test';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)


  return (
    <ChakraProvider>
      <Test />
    </ChakraProvider>
  )
}

export default App
