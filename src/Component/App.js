import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./salma.css";
// import axios from "axios"
import "../index.css";

export default function App() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // function login(e) {
  //     let Doctor = {
  //         email: email,
  //         password: password,
  //     }
  //     e.preventDefault();
  //     console.log({ email, password });

  //     //Send Api request to validate data and get token

  //     axios({
  //         method: "get",
  //         url: 'api/user/login',
  //         params: { email: email , password: password}
  //     })
  //   }

  let loggedIn = localStorage.getItem("isLoggedln");
  if (loggedIn !== "yes") {
    return (
      <div style={{ backgroundColor: "AliceBlue	" }}>
        <nav
          style={{
            borderBottom: "Center 1px",
            paddingBottom: "1rem",
            backgroundColor: "AliceBlue",
          }}
        >
          <h3 className="code">Diabetics in KSA </h3>
          <Link to="/Firstpage">
            {" "}
            <button className="button">home</button>
          </Link>{" "}
          {"  "}
          <Link to="/LogInPage">
            {" "}
            <button className="button">Login</button>
          </Link>{" "}
          <Link to="/registration">
            {" "}
            <button className="button">registration</button>
          </Link>{" "}
          <Link to="/Medicin">
            {" "}
            <button className="button">Medicin</button>
          </Link>{" "}
          <Link to="/Technology">
            {" "}
            <button className="button">Technology</button>
          </Link>{" "}
          <Link to="/type1">
            {" "}
            <button className="button">Type 1</button>
          </Link>{" "}
          <Link to="/type2">
            {" "}
            <button className="button">Type 2</button>
          </Link>{" "}
        </nav>
        <Outlet />
      </div>
    );

    // if (email == "salma" && password == "salma" ) {
    // return (
    //     <div>
    //       <nav className="navbar">

    //           <Link onClick={() => { localStorage.setItem("isLoggedln", "no"); window.open("/Firstpage", "_self") }} to='/Firstpage' ><button className="button" >Logout</button></Link>
    //           <Link to='/Firstpage' > <button className="button" >home</button></Link>  {"  "}
    //           <Link to='/Medicin' > <button className="button" >Medicin</button></Link>  {" "}
    //           <Link to='/Technology' > <button className="button" >Technology</button></Link>  {" "}
    //           <Link to='/type1' > <button className="button" >Type 1</button></Link>  {" "}
    //           <Link to='/type2' > <button className="button" >Type 2</button></Link>  {" "}
    //           <Link to='/post' > <button className="button" >Create poste </button></Link>  {" "}
    //           <Link to='/Patient' > <button className="button" > Patient</button></Link>  {" "}

    //       </nav>
    //       <Outlet/>

    //     </div>
    //   // )
    // }
  }

  return (
    <div>
      <nav className="navbar">
        <Link
          onClick={() => {
            localStorage.setItem("isLoggedln", "no");
            window.open("/Firstpage", "_self");
          }}
          to="/Firstpage"
        >
          <button className="button">Logout</button>
        </Link>
        <Link to="/Firstpage">
          {" "}
          <button className="button">home</button>
        </Link>{" "}
        {"  "}
        <Link to="/Medicin">
          {" "}
          <button className="button">Medicin</button>
        </Link>{" "}
        <Link to="/Technology">
          {" "}
          <button className="button">Technology</button>
        </Link>{" "}
        <Link to="/type1">
          {" "}
          <button className="button">Type 1</button>
        </Link>{" "}
        <Link to="/type2">
          {" "}
          <button className="button">Type 2</button>
        </Link>{" "}
      </nav>
      <Outlet />
    </div>
  );
}