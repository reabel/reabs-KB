import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import loadMarkdown from './jsx/alt';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "alt",
    element:  <><h1>test</h1>{loadMarkdown()}</>
  },
  {
    path: "Javascript/svelte/readme.md",
    element:  loadMarkdown()
  }
]);

//https://reactrouter.com/en/main/start/tutorial
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
