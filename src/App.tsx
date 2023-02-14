import React from "react";
import { Route } from "react-router"
import { Routes, Outlet } from "react-router-dom"

const Home = React.lazy(() => wait(1000).then(() => import('./pages/Home')))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

const SuspenseWrapper = () => {
  return (
    <React.Suspense>
      <Outlet />
    </React.Suspense>
  )
}

const wait = (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}

export default App
