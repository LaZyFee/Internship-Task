import { NavLink } from "react-router-dom";

function Tab() {
  const menuItems = [
    { name: "About", path: "/" },
    { name: "Experience", path: "/" },
    { name: "Contact", path: "/" },
  ];
  return (
    <div role="tablist" className="tabs tabs-bordered">
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `tab ${
              isActive ? "tab-active font-semibold bg-rose-700 text-white" : ""
            } 
             textarea-xs sm:text-base lg:text-lg whitespace-nowrap`
          }
          end
          role="tab"
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Tab;
