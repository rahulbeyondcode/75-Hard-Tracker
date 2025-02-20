import { Outlet } from "react-router-dom";

import Sidebar from "components/layout/Sidebar";

function AppUI() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="main-section">
        <Outlet />
      </div>
    </div>
  );
}

export default AppUI;
