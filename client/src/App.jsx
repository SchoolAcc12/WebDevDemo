import './styles/App.css'
import Register from './Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Register />}>
            <Route index element={<Register />} />
            <Route path="register" element={<Register />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
