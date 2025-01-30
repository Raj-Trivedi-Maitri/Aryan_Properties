import { Link } from "react-router-dom";
import { useSidebar } from "../../hooks/SidebarContext"; // Import SidebarContext
import { useLogin } from "../../hooks/LoginContext";


const Sidebar = () => {
  const { isSidebarOpen, setSidebarOpen } = useSidebar(); // Access context
  const { logout } = useLogin();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle sidebar open state
  };

  const handleLogOut = () => {
    logout();

};

  return (
    <div
      className={`left-part border-r-2 ${
        isSidebarOpen ? "w-[20%]" : "w-[5%]"
      } transition-all duration-300`}
    >
      <div className="h-[20%] py-1 border flex items-center">
        <div>
          <img className="object-none" src="/LeftColumn/Logo.png" alt="Logo" />
        </div>
        {isSidebarOpen && (
          <div className="flex flex-col gap-3 py-2 pl-3">
            <h1 className="font-semibold text-2xl">Welcome, Aryans</h1>
            <h1 className="text-gray-600">Mon, 20 Jan 2025</h1>
          </div>
        )}
      </div>

      <div
        className={`flex flex-col gap-10 text-xl pl-7 my-32 ${
          !isSidebarOpen && "pl-2"
        }`}
      >
        <SidebarItem
          to="/admin-dashboard"
          icon="/LeftColumn/ic_round-dashboard.png"
          label="Dashboard"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarItem
          to="/user"
          icon="/LeftColumn/User (2).png"
          label="User"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarItem
          to="/property"
          icon="/LeftColumn/House (1).png"
          label="Property"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarItem
          to="/user"
          icon="/LeftColumn/accountant 1 (1).png"
          label="User"
          isSidebarOpen={isSidebarOpen}
        />
        <div className="hover:cursor-pointer hover:text-black text-gray-500 relative">
          <div className="flex gap-4 items-center" onClick={toggleSidebar}>
            <img
              className="object-none"
              src={
                isSidebarOpen
                  ? "/LeftColumn/icon (1).png"
                  : "/LeftColumn/Settings.png"
              }
              alt="Settings Icon"
            />
            {isSidebarOpen && <h1>Settings</h1>}
            <img
              className={`object-none transition-transform ${
                isSidebarOpen ? "rotate-180" : "rotate-0"
              }`}
              src={
                isSidebarOpen
                  ? "/LeftColumn/Opened.png"
                  : "/LeftColumn/Closed.png"
              }
              alt="Toggle Icon"
            />
          </div>
          {isSidebarOpen && (
            <div className="pl-10 mt-3">
              <Link
                to="/settings/access"
                className="my-3 hover:text-blue-700 block"
              >
                Access
              </Link>
              <Link
                to="/settings/addfield"
                className="hover:text-blue-700 block"
              >
                Input Field
              </Link>
              
            </div>
          )}
          <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogOut}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 "
                >
                  Logout
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ to, icon, label, isSidebarOpen }) => (
  <Link
    to={to}
    className="flex gap-4 hover:cursor-pointer hover:text-black text-gray-500 items-center"
  >
    <img src={icon} alt={`${label} Icon`} />
    {isSidebarOpen && <h1>{label}</h1>}
  </Link>
);

export default Sidebar;
