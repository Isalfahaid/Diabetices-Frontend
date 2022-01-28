import axios from "axios";
import React, { useState } from "react";

export default function Poste() {
  //   for DoctorPoste
  let [id, setid] = useState("");
  let [title, settitle] = useState("");
  let [Subject, setSubject] = useState("");
  let [img, setimg] = useState("");
  let [displayBorder1, setDisplayBorder1] = useState(false);

  //  function for DoctorPoste
  function handleid(event) {
    setid(event.target.value);
  }

  function handletitle(event) {
    settitle(event.target.value);
  }
  function handlesetSubject(event) {
    setSubject(event.target.value);
  }
  function handleimg(event) {
    setimg(event.target.value);
  }

  //  object for DoctorPoste
  let ListPoste = {
    doctorPosteId: id,
    title: title,
    Subject: Subject,
    img: img,
  };

  // api for DoctorPoste
  function handlePoste() {
    console.log(ListPoste);
    axios({
      method: "post",
      url: "https://diabeticasback.herokuapp.com/api/doctorPoste/add",
      data: ListPoste,
    });
  }

  return (
    <div>
      <button
        className="btn"
        onClick={() => setDisplayBorder1(!displayBorder1)}
      >
        {" "}
        Create a {displayBorder1 ? " Post" : " Post"}{" "}
      </button>
      <br />
      {displayBorder1 && (
        <div className="log">
          <div>
            {" "}
            <label className="input"> Id :</label>{" "}
          </div>
          <div>
            <input
              className="input"
              placeholder="National Id"
              onChange={handleid}
            />
          </div>

          <div>
            {" "}
            <label className="input"> Post title :</label>{" "}
          </div>
          <div>
            <input
              className="input"
              placeholder=" Post title"
              onChange={handletitle}
            />
          </div>

          <div>
            {" "}
            <label className="input"> Subject :</label>{" "}
          </div>
          <div>
            <input
              className="input"
              placeholder=" Subject"
              onChange={handlesetSubject}
            />
          </div>

          <div>
            {" "}
            <label className="input"> Img :</label>{" "}
          </div>
          <div>
            <input className="input" placeholder=" Ing" onChange={handleimg} />
          </div>

          <button className="btn" onClick={handlePoste}>
            Posted{" "}
          </button>
        </div>
      )}
    </div>
  );
}