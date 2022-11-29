import React,{lazy,} from 'react'
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import Login from './pages/login'
import App from './App'
const PageRoutr=()=>(
   <div className="app">
        <Routes> 
          <Route exact path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/app" element={<App/>} />
        </Routes>
      </div>
)
export default PageRoutr