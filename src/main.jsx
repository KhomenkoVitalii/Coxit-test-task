import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppContextProvider } from './context/appContext.jsx'
import { RouterProvider } from 'react-router-dom';
import AppRouter from './router/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={AppRouter} />
    </AppContextProvider>
  </React.StrictMode>,
)
