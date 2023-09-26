
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/NavBar/Navbar';


const MainLayout = () => {
    return (
        <div>

            <div>
                <Navbar></Navbar>
          
            </div>

            
            <div className='w-3/4 mx-auto'>
            <Outlet></Outlet>

            </div>
           

        </div>
    );
};

export default MainLayout;