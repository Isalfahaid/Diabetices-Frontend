import React, { useState, useEffect } from "react";
import "./salma.css";
import axios from "axios";

export default function Registration() {
  //  for patiant
  const [nationalId, setnationalId] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [age, setage] = useState("");
  const [patient_type, setpatient_type] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [displayBorder, setDisplayBorder] = useState(false);
  const [email, setemail] = useState("");

  const [myUser, setMyUser] = useState({
    nationalId: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    age: "",
    patient_type: "",
    phone: "",
    address: "",
    email: "",
  });

  //  function for Patient

  function handleuserName(event) {
    setusername(event.target.value);
  }
  function handlepassword(event) {
    setpassword(event.target.value);
  }
  function handlephone(event) {
    setphone(event.target.value);
  }
  function handleFirstName(event) {
    setfirstname(event.target.value);
  }
  function handleLastName(event) {
    setlastname(event.target.value);
  }
  function handleAge(event) {
    setage(event.target.value);
  }
  function handleNational_id(event) {
    setnationalId(event.target.value);
  }
  function handleAddress(event) {
    setaddress(event.target.value);
  }
  function handlepatient_type(event) {
    setpatient_type(event.target.value);
  }
  function handelemail(event) {
    setemail(event.target.value);
  }

  //  object for Patient
  let ListPatient = {
    nationalId: Number(nationalId),
    username: username,
    password: password,
    firstname: firstname,
    lastname: lastname,
    age: age,
    patient_type: patient_type,
    phone: phone,
    address: address,
    email: email,
  };

  useEffect(() => {
    axios.get("https://diabeticasback.herokuapp.com/api/user").then((response) => {
      console.log(response.data);
      setMyUser(response.data[0]);
    });
    return () => {};
  }, []);

  //  api for Patient
  function handleClick1() {
    console.log(ListPatient);
    axios({
      method: "post",
      url: "https://diabeticasback.herokuapp.com/api/user/add",
      data: ListPatient,
    });
  }

  return (
    <main style={{ padding: "8rem" }}>
      <div className="button">
        
        {/*       form for Patient    */}

        <button
          className="btn"
          onClick={() => setDisplayBorder(!displayBorder)}
        >
          Register as a{displayBorder ? " patient" : " patient"}{" "}
        </button>

        <br />

        {displayBorder && (
          <div className="input">
            <div>
              {" "}
              <label className="input">National Id :</label>{" "}
            </div>
            <div>
              {" "}
              <input
                className="input"
                placeholder="National Id"
                onChange={handleNational_id}
              />{" "}
            </div>

            <div>
              {" "}
              <label className="input"> username </label>{" "}
            </div>
            <div>
              {" "}
              <input
                className="input"
                placeholder="username"
                onChange={handleuserName}
              />{" "}
            </div>
            <div>
              {" "}
              <label className="input"> password </label>{" "}
            </div>
            <div>
              {" "}
              <input
                className="input"
                placeholder="password"
                onChange={handlepassword}
              />{" "}
            </div>

            <div>
              {" "}
              <label className="input"> Email </label>{" "}
            </div>
            <div>
              {" "}
              <input
                className="input"
                placeholder="Email"
                onChange={handelemail}
              />{" "}
            </div>

            <div>
              {" "}
              <label className="input"> Firstname </label>{" "}
            </div>
            <div>
              {" "}
              <input
                className="input"
                placeholder="Firstname"
                onChange={handleFirstName}
              />{" "}
            </div>

            <div>
              {" "}
              <label className="input"> Lastname: </label>
            </div>
            <div>
              {" "}
              <input
                className="input"
                placeholder="Lastname"
                onChange={handleLastName}
              />{" "}
            </div>

            <div>
              {" "}
              <label className="input"> Age: </label>{" "}
            </div>
            <div>
              {" "}
              <input className="input" placeholder="Age" onChange={handleAge} />
            </div>

            <div>
              {" "}
              <label className="input"> patient_type : </label>{" "}
            </div>
            <div>
              {" "}
              <input className="input" onChange={handlepatient_type} />{" "}
            </div>

            <div>
              {" "}
              <label className="input"> phone: </label>{" "}
            </div>
            <div>
              {" "}
              <input
                className="input"
                placeholder="+966"
                onChange={handlephone}
              />
            </div>

            <div>
              {" "}
              <label className="input"> Address: </label>{" "}
            </div>
            <div>
              {" "}
              <input
                className="input"
                placeholder="Address"
                onChange={handleAddress}
              />{" "}
              <dr />
              <dr />
              <dr />
            </div>
            <dr />
            <dr />
            <button className="btn" onClick={handleClick1}>
              Register{" "}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
