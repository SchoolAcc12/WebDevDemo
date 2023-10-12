import './styles/App.css'
import Register from './Register'
import HomePage from './HomePage'
import Layout from './Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage/>} />
            <Route path="register" element={<Register />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
