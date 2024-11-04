import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/image/Logo.png";
import { PrimaryButton } from "../../../Components/PrimaryButton";
import Reactangle4 from "../../../assets/image/Rectangle 4.png";
const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Clients", path: "/clients" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
].map((item) => (
  <NavLink
    key={item.name}
    to={item.path}
    className={({ isActive }) =>
      isActive
        ? "border-b-4 font-extrabold"
        : "hover:border-b-4 hover:border-b-gray-500 transition duration-300"
    }
  >
    {item.name}
  </NavLink>
));

const Nav = () => {
  return (
    <div
      className="navbar text-white z-20 sticky top-0 bg-[#8E1B0F]"
      style={{
        backgroundImage: `url(${Reactangle4})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="navbar-start flex items-center justify-around w-full flex-row-reverse lg:flex-row">
        {/* Dropdown menu for mobile */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden me-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-1 z-[1] shadow-2xl bg-white text-black right-0"
          >
            {menuItems}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="nav-img" />
        </Link>

        {/* Menu items for desktop */}
        <div className="hidden md:flex space-x-4">{menuItems}</div>
      </div>

      {/* "Book a Table" button for desktop */}
      <div className="navbar-end hidden md:block ml-6">
        <PrimaryButton>BOOK A TABLE</PrimaryButton>
      </div>
    </div>
  );
};

export default Nav;
