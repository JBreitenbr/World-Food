import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {BrowserRouter}  from 'react-router-dom';
import Chart from './MyChart'
import Dashboard1 from './Dashboard1'
import Dashboard2 from './Dashboard2'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><BrowserRouter>

          <Routes>
              <Route path="/" element={<Chart/>}/>
              <Route path="/dashboard2" element={<Dashboard2/>}/>
          </Routes>
        
    </BrowserRouter>

     
    </>
  )
}

export default App