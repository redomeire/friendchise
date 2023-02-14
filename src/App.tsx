import { Route } from "react-router"
import { Routes } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
