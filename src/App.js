import { useLocation } from "react-router-dom";
import "./generalStyles.css";

import AllRoutes from "./AllRoutes";

export default function App() {
  const location = useLocation();

  return (
    <>
      <div
        className="desktop-img"
        style={{
          width:
            location.pathname === "/" || location.pathname === "/gallery"
              ? "0vw"
              : "",
        }}
      ></div>
      {location.pathname === "/" ? null : (
        <span className="desktop-img-span">Photo by Hans Veth on Unsplash</span>
      )}
      <div
        className="App"
        style={{
          backgroundImage:
            location.pathname === "/"
              ? "url('https://images.unsplash.com/photo-1605197585663-011e30915ab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
              : null,
          backgroundColor: location.pathname === "/" ? null : "#fffde0",
          width:
            location.pathname === "/" || location.pathname === "/gallery"
              ? "100vw"
              : "",
        }}
      >
        <AllRoutes />
      </div>
    </>
  );
}
