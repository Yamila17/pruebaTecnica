import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterProvider from './router/RouterProvider';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <SearchProvider>
          <RouterProvider />
        </SearchProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
