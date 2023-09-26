//  import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Donations from "../../Components/Header/Donations/Donations";
// import Donations from "../../Components/Header/Donations/Donations";



const Home = () => {

    // const Donations= useLoaderData();
    // console.log(Donations);
    return (
        <div>

            <div className="h-[75vh] bg-fuchsia-400 mt-5">
              <Banner/>
            </div>
            <div>
               {/* <Donations Donations={Donations}></Donations> */}
               {/* <Donations Donations={Donations}/> */}
               
                <Donations/>
            </div>
            
        </div>
    );
};

export default Home;