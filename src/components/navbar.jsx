import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <NavLink
        to={"/"}
        className="h-10 w-fit px-2 rounded-lg bg-white flex justify-center items-center font-bold shadow-md"
      >
        <p
          className={`blue-gradient_text capitalize ${
            pathname === "/" ? "" : "!text-black-500"
          }`}
        >
          home
        </p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to={"about"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"projects"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black-500"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
