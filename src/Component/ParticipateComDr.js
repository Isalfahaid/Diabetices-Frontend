import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";


export default class ParticipateComDr extends Component {

  constructor() {
    super()
    this.state = {
      doctorPoste: []
    };

  }

  componentDidMount() {
    axios.get("https://diabeticasback.herokuapp.com/api/doctorPoste")
    .then(results => {
      const doctorPoste = results.data;
      this.setState({ doctorPoste });
    });
  }



  delete(doctorPosteId) {
    axios.delete(`https://diabeticasback.herokuapp.com/api/doctorPoste/delete/${doctorPosteId}`)
        .then(res => {
            const doctorPoste = this.state.doctorPoste.filter
                (items => items.doctorPosteId !== doctorPosteId);
            this.setState({ doctorPoste });
        })

      }

   
      render() {
      return (
<div>
        {this.state.doctorPoste.map((items) => {
          return (
            <Card  style={{ width: "18rem" }}>
              <Card.Img
                alt="Avatar"
                class="image"
                style={{ width: "100%" }}
                variant="top"
                src={items.img}
              />
              <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text></Card.Text>
                {items.subject}

              </Card.Body>
              <hr />
              <button className="btn" onClick={(e) => this.delete(items.doctorPosteId)}>delete</button>
            </Card>
          );
        })}
</div>
        
    ); 
  }
}
