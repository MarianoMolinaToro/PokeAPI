import { useState } from 'react'

import './App.css'

import Navigation from './components/Navigation'
import AppRoutes from './routes/AppRoutes'



function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Navigation/>
       <AppRoutes/>        
    
      </div>
 
  )
}

export default App
