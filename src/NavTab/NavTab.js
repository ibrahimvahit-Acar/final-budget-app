import React from "react";
import "./NavTab.css";
import { useNavigate } from "react-router-dom";
const NavTab = (props) => {
  const { index } = props;
  const navigate = useNavigate();
  const quit = () => {
    navigate("/login");
  };
  const Home = () => {
    navigate("/home");
  };
  const About = () => {
    navigate("/about");
  };
  return (
    <div className="full-navbar">
      <div className="first-navbar">
        <img
          className="flat"
          src="https://avatars.mds.yandex.net/i?id=5854c5247cc767a215d24ab53a31e6b7-4571053-images-thumbs&n=13"
          alt=""
        ></img>
        <ul className="ul-css">
          <li onClick={Home} className={index === "0" ? "btn active" : "btn"}>
            Cüzdan
          </li>
          <li onClick={About} className={index === "1" ? "btn active" : "btn"}>
            Uygulama Hakkında
          </li>
        </ul>
      </div>
      <div className="second-navbar">
        <li onClick={quit} className="quit-btn">
          Çıkış
        </li>
      </div>
    </div>
  );
};

export default NavTab;
