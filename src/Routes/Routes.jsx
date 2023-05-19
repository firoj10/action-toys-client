
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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element: <AddToy></AddToy>
        },
        {
          path: "updateToy/:id",
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`http://localhost:5000/actionToy/${params.id}`)

        },
        {
          path: 'toyDetails/:id',
          element: <ToyDetails></ToyDetails>,
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
          path: "login",
          element: <Login></Login>
        },
      
      ],
    },
  ]);

export default router;