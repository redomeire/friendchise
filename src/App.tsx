import React from "react";
import { Route } from "react-router"
import { Routes, Outlet } from "react-router-dom"
import PageLoading from "@/components/loader/PageLoading";

const Home = React.lazy(() => wait(1000).then(() => import('@/pages/Home')))

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
    <React.Suspense fallback={<PageLoading/>}>
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
