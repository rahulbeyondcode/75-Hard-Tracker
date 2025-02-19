import { Outlet } from "react-router-dom";

// import Sidebar from "layout/Sidebar";

const DailyProgress = () => {
  return (
    <div className="d-flex">
      {/* <Sidebar /> */}
      {/* <div className="main-section"> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};

export default DailyProgress;
