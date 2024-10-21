import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute.jsx'

import HomePage from './pages/HomePage.jsx'
import ConversationsPage from './pages/ConversationsPage.jsx'
import StartDetailPage from './pages/StartDetailPage.jsx'
import CompleteDetailPage from './pages/CompleteDetailPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" exact element={<HomePage />} />
          <Route path="/start" element={<PrivateRoute />}>
            <Route path="/start" element={<ConversationsPage />} />
          </Route>
          <Route path="/start/:ids" element={<StartDetailPage />} />
          <Route path="/start/:ids/complete/:idc" element={<CompleteDetailPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
