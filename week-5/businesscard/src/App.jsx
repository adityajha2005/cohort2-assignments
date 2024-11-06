import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateCard } from './Components/CreCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateCard 
        name="Aditya"
        description="Full Stack Developer"
        interests={['React', 'Node.js', 'TypeScript']}
        linkedin="https://www.linkedin.com"
        twitter="https://www.twitter.com"
      />
    </div>
  )
}

export default App
