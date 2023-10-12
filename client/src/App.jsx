import './styles/App.css'
import Register from './Register'
import HomePage from './HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
