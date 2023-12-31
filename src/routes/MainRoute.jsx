import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            },
            {
                path: 'product/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://toy-cars-server-six.vercel.app/toys/${params.id}`)
            },
            {
                path: 'all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: 'add-toy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'my-toys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
            },
            {
                path: 'update-toy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({params})=> fetch(`https://toy-cars-server-six.vercel.app/toys/${params.id}`)
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            }

        ]
    }
])

export default router