import { Outlet } from "react-router-dom";

function Onboarding() {
  return (
    <div>
      <h1>Onboarding Page</h1>
      <Outlet />
    </div>
  );
}

export default Onboarding;
