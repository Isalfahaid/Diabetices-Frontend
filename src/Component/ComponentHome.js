    import React, {Component} from "react";
    import axios from "axios";
    import "bootstrap/dist/css/bootstrap.min.css";   
    import * as reactBootstrap from "react-bootstrap";
  
    export default class ComponentHome extends Component {
        constructor() {
          super();
          this.state = {
            patient: []
          };
      }
    
    
      componentDidMount() {
        axios.get("https://diabeticasback.herokuapp.com/api/user")
            .then(results => {
                const patient = results.data;
                this.setState({ patient });
            });
    }
    
    delete(nationalId) {
        axios.delete(`https://diabeticasback.herokuapp.com/api/user/delete/${nationalId}`)
            .then(resul => {
                const patient = this.state.patient.filter
                    (item => item.nationalId !== nationalId);
                this.setState({ patient });
            })
    
          }
            render() {
              <dr/>
              return(
              
              <reactBootstrap.Table striped bordered hover>
                <dr/>
                <dr/>
              <thead>
              <dr/>  <dr/>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Types</th>
                  <th>phone</th>
                  <th>address</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.patient.map((item) => {
                    return(
                  <tr key={item.nationalId}>
                    <td>{item.nationalId}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.age}</td>
                    <td>{item.patient_type}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td><button className="btn" onClick={(e) => this.delete(item.nationalId)}>delete</button> </td>
                          
                  </tr>)
                })}
              </tbody>
            </reactBootstrap.Table>
              )
                
    
              }
            }