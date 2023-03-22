import Login from "./login";
import Home from "./home";
import { useEffect } from "react";

export default function Main() {
  var item;
  useEffect(() => {
    // Perform localStorage action
    item = localStorage.getItem("token");
  }, []);
  if (item == null) {
    return <Login />;
  } else {
    return <Home />;
  }
}
