import React from "react";
import { Route } from "react-router"
import { Routes, Outlet } from "react-router-dom"
import PageLoading from "@/components/loader/PageLoading";
import LoginCtx from "@/context/LoginContext";
import PrivateRoute from "./components/routes/PrivateRoute";
import AuthRoute from "./components/routes/AuthRoute";

const Home = React.lazy(() => wait(1000).then(() => import('@/pages/Home')))
const Waralaba = React.lazy(() => wait(1000).then(() => import('@/pages/Waralaba')))
const Register = React.lazy(() => wait(1000).then(() => import('@/pages/Register')))
const DetailWaralaba = React.lazy(() => wait(1000).then(() => import('@/pages/DetailWaralaba')))
const History = React.lazy(() => wait(1000).then(() => import('@/pages/History')))
const Profile = React.lazy(() => wait(1000).then(() => import('@/pages/Profile')))
const EditProfile = React.lazy(() => wait(1000).then(() => import('@/pages/EditProfile')))
const Disimpan = React.lazy(() => wait(1000).then(() => import('@/pages/Disimpan')))

function App() {
  return (
    <div className="App">
      <LoginCtx>
        <Routes>
          <Route element={<SuspenseWrapper />}>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/profile/edit" element={<EditProfile/>}/>
              <Route path="/waralaba" element={<Waralaba />} />
              <Route path="/history" element={<History />} />
              <Route path="/saved" element={<Disimpan />} />
              <Route path="/waralaba/:franchiseId" element={<DetailWaralaba />} />
            </Route>
            <Route element={<AuthRoute />}>
              <Route path="/register" element={<Register />} />
            </Route>
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
