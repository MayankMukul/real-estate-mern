
import HomePage from './routes/homePage/HomePage.jsx';
import Layout from './routes/layout/Layout.jsx';
import ListPage from './routes/listPage/ListPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './routes/login/Login.jsx';
import SinglePage from './routes/singlePage/SinglePage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'/list',
        element:<ListPage></ListPage>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/:id',
        element:<SinglePage/>
      }
    ]
  }
])
function App() {
 
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
