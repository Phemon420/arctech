import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Butter from './component/butter'
import MindMapi from './component/mindmap'

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Butter/>}></Route>
          <Route path='/mindmap' element={<MindMapi/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;