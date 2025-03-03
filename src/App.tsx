import { useState } from 'react'
import { Button, Container, Title, Text, Image, Box } from '@mantine/core'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Box mb="lg" className="flex gap-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" aria-label="Learn more about Vite">
          <Image src={viteLogo} alt="Vite logo" width={100} />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" aria-label="Learn more about React">
          <Image src={reactLogo} alt="React logo" width={100} className="animate-spin-slow" />
        </a>
      </Box>
      <Title order={1} className="text-blue-600 mb-4 text-center">
        Welcome to Vite + React + Tailwind CSS + Mantine UI
      </Title>
      <Text className="mb-4 text-lg text-center">
        This is a beautiful welcome page created using Mantine UI components.
      </Text>
      <Button 
        onClick={() => setCount((count) => count + 1)}
        color="blue"
        size="lg"
        className="mb-4"
      >
        Count is {count}
      </Button>
      <Text className="text-sm text-gray-500 text-center">
        Edit <code>src/App.tsx</code> and save to test HMR
      </Text>
      <Text className="text-sm text-gray-500 text-center">
        Click on the Vite and React logos to learn more
      </Text>
    </Container>
  )
}

export default App

