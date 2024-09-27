

import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="backdrop-blur-md bg-black">
            <div className="flex justify-between items-center p-12 rounded-lg">
                <div className="logo">
                    <img src="Turbo Game logo.png" alt="Logo" className="h-16 px-24" />
                </div>
                <nav>
                    <ul className="flex justify-end list-none border border-bg-customGray rounded-full p-5 bg-black-900">
                        <li className="ml-5 relative">
                            <NavLink to="/" className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-red-500 transition-all ease-linear">
                                Menu
                            </NavLink>
                        </li>
                        <li className="ml-5 relative">
                            <NavLink to="/generos" className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-red-500 transition-all ease-linear">
                                Jogos
                            </NavLink>
                        </li>
                        <li className="ml-5 relative">
                            <NavLink to="/loja" className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-red-500 transition-all ease-linear">
                                Loja
                            </NavLink>
                        </li>
                        <li className="ml-5 relative">
                            <NavLink to="/Login" className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-red-500 transition-all ease-linear">
                                Login
                            </NavLink>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    );
}
