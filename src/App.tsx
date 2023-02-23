import React from "react";
import { Route } from "react-router"
import { Routes, Outlet } from "react-router-dom"
import PageLoading from "@/components/loader/PageLoading";
import LoginCtx from "@/context/LoginContext";

const Home = React.lazy(() => wait(1000).then(() => import('@/pages/Home')))
const Waralaba = React.lazy(() => wait(1000).then(() => import('@/pages/Waralaba')))
const Register = React.lazy(() => wait(1000).then(() => import('@/pages/Register')))

function App() {
  return (
    <div className="App">
      <LoginCtx>
        <Routes>
          <Route element={<SuspenseWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/waralaba" element={<Waralaba />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </LoginCtx>
    </div>
  )
}

const SuspenseWrapper = () => {
  return (
    <React.Suspense fallback={<PageLoading />}>
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
