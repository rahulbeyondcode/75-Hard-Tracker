import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "setup/app-routing";
import "sass/main.scss";

import "./style.css";

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

export default App;
