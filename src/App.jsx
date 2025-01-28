import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./latout/Layout"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Collection from "./pages/Collection"
import SingleCategoryCollection from "./pages/SingleCategoryCollection"
import Contact from "./pages/Contact"
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
        path:"collection",
        element:<Collection/>
      },
      {
        path:"Singlecategory",
        element:<SingleCategoryCollection/>
      },
      {
        path:"contact",
        element:<Contact/>
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
