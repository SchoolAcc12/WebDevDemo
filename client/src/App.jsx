import './styles/App.css'
import Singup from './Signup'
import HomePage from './HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="register" element={<Singup />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
