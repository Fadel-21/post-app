import Login from "./login";
import Home from "./home";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Main() {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  if (token === undefined || token == null) {
    return <Login />;
  } else {
    return <Home />;
  }
}
