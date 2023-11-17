import { React } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Posts from "./Posts";
function Home() {
  return (
    <>
      <Nav />
      <div className="text-center  bg-gray-400">
        <Posts />
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
