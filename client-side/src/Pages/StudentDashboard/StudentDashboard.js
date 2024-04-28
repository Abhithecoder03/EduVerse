import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";

import { Outlet } from "react-router-dom";
const StudentDashboard = () => {
  return (
    <>
      <div className="flex">
        <div className="flex absolute gap-3">
          <Sidebar />
        </div>

        <Outlet className="w-full" />
      </div>
    </>
  );
};

export default StudentDashboard;








// import React from "react";
// import Sidebar from "../../Components/Sidebar/Sidebar";
// import { Routes, Route } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import Profile from "./Profile/Profile";

// const StudentDashboard = () => {
//   return (
//     <div className="flex w-screen h-screen overflow-hidden">
//       <Sidebar />
//       <Outlet />
//     </div>
//   );
// };

// export default StudentDashboard;
