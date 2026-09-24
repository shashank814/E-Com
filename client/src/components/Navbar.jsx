import { NavLink, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { logoutUser } = useContext(AuthContext)

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      
      <div className="flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Ecom
        </div>

        {/* HAMBURGER (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {/* CENTER: Links (desktop) */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-500"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/main/add-product"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-500"
            }
          >
            Add Product
          </NavLink>
        </div>

        {/* RIGHT: Logout (desktop) */}
        <button
          className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
          
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/main/about" onClick={() => setOpen(false)}>
            About
          </NavLink>

          <NavLink to="/main/add-product" onClick={() => setOpen(false)}>
            Add Product
          </NavLink>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition w-fit"
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;