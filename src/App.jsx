import React from 'react'
import { Routes,Route } from "react-router"
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainsHome from './pages/CaptainsHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRIding from './pages/CaptainRIding'



function App() {
 
  return (
    <div>
      <Routes>
            <Route path='/' element={<Start/>}/>
            <Route path='/home' element={
                <UserProtectedWrapper>
                      <Home/>
                </UserProtectedWrapper>
              }/>
            <Route path='/users/login' element={<UserLogin/>}/>
            <Route path='/users/signup' element={<UserSignup/>}/>
            <Route path='/captains/login' element={<CaptainLogin/>}/>
            <Route path='/captains/register' element={<CaptainSignup/>}/>
            <Route path='/riding' element={<Riding/>}/>
            <Route path='/captains/riding' element={<CaptainRIding/>}/>
            <Route path='/users/logout' element={
                    <UserProtectedWrapper>
                          <UserLogout/>
                    </UserProtectedWrapper>}>
            </Route>
            <Route path='/captains/logout' element={
                    <CaptainProtectedWrapper>
                          <CaptainLogout/>
                    </CaptainProtectedWrapper>}>
            </Route>
            <Route path='/captains/home' element={
              <CaptainProtectedWrapper>
                    <CaptainsHome/>
              </CaptainProtectedWrapper>
              }>
                
              </Route>
      </Routes>
    </div>
  )
}

export default App
