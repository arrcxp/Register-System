import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/Home.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import DataContext from './pages/DataContext.jsx'

import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/home',
    element: <Home />
  }
])

function App() {
  const [information, setInformation] = useState([]);

  const onSetInformation= (newInformation) => {
    setInformation(() => [newInformation])
  }
  return (
    <DataContext.Provider value={{ information, onSetInformation }}>
      <RouterProvider router={router}></RouterProvider>
    </DataContext.Provider>
  )
}

export default App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
