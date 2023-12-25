import { NavLink } from "react-router-dom";

import AboutIcon from "assets/AboutIcon";
import DashboardIcon from "assets/DashboardIcon";
import GoalIcon from "assets/GoalIcon";
import ProfileIcon from "assets/ProfileIcon";
import TaskIcon from "assets/TaskIcon";
import CommunityIcon from "assets/CommunityIcon";
import GalleryIcon from "assets/GalleryIcon";
import NotificationIcon from "assets/NotificationIcon";
import ProgressIcon from "assets/ProgressIcon";

function Sidebar() {
  return (
    <aside>
      {/* <img src="" alt="profile_image" /> */}
      <div className="profile-details">
        <div>RR</div>
        <p>Rahul R</p>
      </div>

      <NavLink to="/dashboard" className="nav-item">
        <DashboardIcon />
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/daily-tasks" className="nav-item">
        <TaskIcon />
        <span>Daily Tasks</span>
      </NavLink>
      <NavLink to="/my-progress" className="nav-item">
        <ProgressIcon />
        <span>My Progress</span>
      </NavLink>
      <NavLink to="/gallery" className="nav-item">
        <GalleryIcon />
        <span>Gallery</span>
      </NavLink>
      <NavLink to="/community" className="nav-item">
        <CommunityIcon />
        <span>Community</span>
      </NavLink>
      <NavLink to="/goals" className="nav-item">
        <GoalIcon />
        <span>Goals</span>
      </NavLink>
      <NavLink to="/notifications" className="nav-item">
        <NotificationIcon />
        <span>Notifications</span>
      </NavLink>
      <NavLink to="/account" className="nav-item">
        <ProfileIcon />
        <span>Account</span>
      </NavLink>
      <NavLink to="/about" className="nav-item">
        <AboutIcon />
        <span>About</span>
      </NavLink>
    </aside>
  );
}

export default Sidebar;
