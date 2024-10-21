import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import FetchContextProvider from './context/FetchContext.jsx'
import PostContextProvider from './context/PostContext.jsx'
import AuthContextProvider from './context/AuthContext.jsx'

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <FetchContextProvider>
          <PostContextProvider>
            <App />
          </PostContextProvider>
        </FetchContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
)
