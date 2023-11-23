import { Link, Outlet } from "react-router-dom";

const TrackerUI = () => {
  return (
    <div>
      <aside>
        <p>Rahul R</p>
        <p>
          <Link to="/dashboard">Dashboard</Link>
        </p>
        <p>
          <Link to="/daily-tasks">Daily Tasks</Link>
        </p>
        <p>
          <Link to="/my-progress">My Progress</Link>
        </p>
        <p>
          <Link to="/gallery">Gallery</Link>
        </p>
        <p>
          <Link to="/community">Community</Link>
        </p>
        <p>
          <Link to="/goals">Goals</Link>
        </p>
        <p>
          <Link to="/notifications">Notifications</Link>
        </p>
        <p>
          <Link to="/account">Account</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </aside>
      <Outlet />
    </div>
  );
};

export default TrackerUI;
