import React, { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    let patient = {
      email: email,
      password: password,
    };
    e.preventDefault();

    axios({
      method: "get",
      url: "https://diabeticasback.herokuapp.com/api/user/login",
      params: { email: email, password: password },
    }).then((res) => {
      console.log(res.data);
      if (res.data == "authenticated") {
        localStorage.setItem("isLoggedln", "yes");
        window.open("/Firstpage", "_self");
      } else {
        alert(res.data);
      }
    });
  }
  return (
    <div className="button">
      <div>
        <h1>Register as a patient</h1>
      </div>
      <div className="btn">
        <div>
          <form className="button"> 
            <div>
              <div>
                {" "}
                <label className="input">Email</label>{" "}
              </div>
              <input
                type="email"
                id="#{label}"
                required="required"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div ></div>
            </div>
            <br></br>
            <div>
              <div>
                {" "}
                <label className="input"> password :</label>{" "}
              </div>

              <input
                type="password"
                id="#{label}"
                required="required"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <div className="button">
                {" "}
                <Link to="/Firstpage"><button className="btn" onClick={login}>Log in 
              </button> </Link>
            </div>
            <br></br>
           
          </form>
        </div>
      </div>
    </div>
  );
}
