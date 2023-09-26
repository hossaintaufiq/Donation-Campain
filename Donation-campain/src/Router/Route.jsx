import {createBrowserRouter} from 'react-router-dom';

import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';



// const myCreateRouter = createBrowserRouter([]);

const myCreateRouter= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/Donation',
                element: <Donation></Donation>
            },
            {
                path:'/statistics',
                element: <Statistics/>
            }

        ]
    }
])


export default myCreateRouter;