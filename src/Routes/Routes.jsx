
import {  createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home/Home/Home';


import Main from '../Layouts/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AddToy from '../pages/AddToy/AddToy';
import AllToys from '../AllToys/AllToys';
import ToyDetails from '../ToyDetails/ToyDetails';
import MyToy from '../MyToy/MyToy';
import UpdateToy from '../pages/UpdateToy/UpdateToy';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Blog from '../pages/Blog/Blog';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "allToys",
          element: <AllToys></AllToys>,
          loader: ()=> fetch('http://localhost:5000/actionToy')
        },
       
        {
          path: "addToy",
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: "updateToy/:id",
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`http://localhost:5000/actionToy/${params.id}`)

        },
        {
          path: 'toyDetails/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/actionToy/${params.id}`)
        },
        {
          path: "myToy",
          element: <MyToy></MyToy>,
        },
       
      
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        },
        {
          path: "login",
          element: <Login></Login>
        },
      
      ],
    },
  ]);

export default router;