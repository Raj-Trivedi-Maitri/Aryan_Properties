import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { LoginProvider, useLogin } from "./hooks/LoginContext.jsx";
import { SidebarProvider } from "./hooks/SidebarContext.jsx";

import Sidebar from "./pages/Adminpage/Sidebar.jsx";
import Admin from "./pages/Adminpage/Admin.jsx"; // Adjust import based on Admin location
import Login from "./hooks/Login.jsx"; // Adjust import based on Login location
import ProtectedRoute from "./hooks/ProtectedRoutes.jsx";
import UserSidebar from "./pages/UserPage/UserSidebar.jsx";
import UserDashboard from "./pages/UserPage/UserDashboard.jsx";


const App = ({ showSidebar }) => {
  const { user } = useLogin(); // Access the user from context
  // Conditional Sidebar Render based on user_type
  // const renderSidebar = () => {
  //   if (!user) {
  //     return null; // If no user, don't render a sidebar (e.g., on login page)
  //   }

  //   if (user.user_type === "admin") {
  //     return <Sidebar />; // Render Admin Sidebar
  //   } else {
  //     return <UserSidebar />; // Render User Sidebar
  //   }
  // };

  return (
    <div className="App ">
      <div className={`flex h-screen ${showSidebar ? "flex" : ""}`}>
        {/* Sidebar displayed conditionally */}
        {showSidebar && <Sidebar />}
        <div className={`flex-grow ${showSidebar ? "" : ""}`}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin-dashboard" element={<Admin />} />
            </Route>

             {/* Protected Routes for User */}
             <Route element={<ProtectedRoute  />}>
              <Route path="/user-dashboard" element={<UserDashboard />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

const AppWrapper = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();
  const noSidebarPages = ["/", "/login", "/user-dashboard"];

  useEffect(() => {
    setShowSidebar(!noSidebarPages.includes(location.pathname));
  }, [location.pathname]);

  return <App showSidebar={showSidebar} />;
};

export default function RootApp() {
  return (
    <LoginProvider>
      <SidebarProvider>
        <Router>
          <AppWrapper />
        </Router>
      </SidebarProvider>
    </LoginProvider>
  );
}
