import { Outlet } from "react-router-dom";

// import Sidebar from "layout/Sidebar";

const DailyProgress = () => {
  console.log("---------------------------------------");
  console.log("");
  return (
    <div className="d-flex">
      {/* <Sidebar /> */}
      <div className="main-section">
        <Outlet />
      </div>
    </div>
  );
};

export default DailyProgress;
