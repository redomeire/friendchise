import React from "react";
import { Route } from "react-router"
import { Routes, Outlet } from "react-router-dom"

const Home = React.lazy(() => wait(1000).then(() => import('./pages/Home')))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<SuspenseWrapper />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

const SuspenseWrapper = () => {
  return (
    <React.Suspense fallback={<h1>loading...</h1>}>
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
