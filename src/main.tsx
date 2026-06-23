import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { Provider } from 'react-redux'
import { store } from './store.tsx'
import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./components/Home.component.tsx";
import Contact from "./components/Contact.component.tsx"


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
