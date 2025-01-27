import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./latout/Layout"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
function App() {
 const router= createBrowserRouter([
  {
    path:"/",
    element : <Layout/>,
    children:[
      {
        path :"/",
        element: <Home/>
      },
      {
        path:"detail",
        element:<Detail/>
      }
    ]
  },
 
 ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
