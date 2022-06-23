import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginUser from "./Data";
import "../Login/Login.css";
const Login = () => {
  const Alert = () => {
    alert("Kullanıcı adı veya Şifre yanlış");
  };
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const log_click = (e) => {
    e.preventDefault();
    var user = LoginUser.find(
      (admin) =>
        admin.Login_Username === loginUser &&
        admin.Login_Password === loginPassword
    );
    if (user) {
      navigate("/home");
    } else {
      Alert();
    }
  };
  
  
  return (
    <div >
      <div className="login-full-page">
        <h2>Elektronik Cüzdanım</h2>
        <form className="form">
          <h1 className="log-title">Giriş Sayfası</h1>
          <div className="first-page">
            <label className="first-login-user"> Kullanıcı Adı</label>
            <input
              className="Text_css"
              type="text"
              onChange={(e) => setLoginUser(e.target.value)}
              autoComplete="off"
              maxLength={12}
              required
            ></input>
            <div className="space"></div>
            <label className="first-login-user"> Şifre </label>
            <input
              className="Text_css"
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
              autoComplete="off"
              required
            ></input>
          </div>

          <div className="second-page">
            <button className="log-button" onClick={log_click}>
              Giriş
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
