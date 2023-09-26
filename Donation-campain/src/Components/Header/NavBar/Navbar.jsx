import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="flex flex-col lg:flex-row lg:gap-1 gap-2 justify-between items-center w-3/4 mx-auto mt-8">

                <img src="Logo.png" alt="" />
                <ul className=" flex p-5 gap-12  ">

                    {/* home */}
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                        }
                    >
                        Donation
                    </NavLink>

                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>

                </ul>


            </nav>
        </div>
    );
};

export default Navbar;