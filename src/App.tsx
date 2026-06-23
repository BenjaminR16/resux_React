import { Link, Outlet } from "react-router"
import './App.css'

function App() {

  return (
    <>
      <h1>Redux</h1>
      <Link to="/">Inicio</Link>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Outlet />
    </>
  )
}

export default App
