import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";

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
                element: <ProductDetails></ProductDetails>,
                loader: ({params})=> fetch(`http://localhost:3000/toys/${params.id}`)
            },
            {
                path: 'all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: 'add-toy',
                element: <AddToy></AddToy>
            }

        ]
    }
])

export default router