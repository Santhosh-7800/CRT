import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from   
'react-router-dom'

import Contact from '../pages/Contact'
import Home from '../pages/Home'
import About from '../pages/About'
import Regular from '../pages/Regular'
import Navigation from '../pages/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/regular" element={<Regular />} />
        <Route path="/contact" element={<Contact />
      } />
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<h1>Not a correct route</h1>}></Route>
    </Routes>
    </>
  )
}

export default App