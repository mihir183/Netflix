import { lazy } from "react";
const Home = lazy(()=>import('./Pages/Home'))

const Routing = [
    {
        path : "/",
        element : Home
    },
]

export default Routing