import React, {useState} from "react";
import {Modal} from "react-bootstrap";

import "./PatientCard.css";

function PatientCard({ patientName, patientId, patientDisease }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const submitHandler = (e) => {
    e.preventDefault();
    handleClose()
   
    fetch('https://hospitalconnectapi.herokuapp.com/enterpatient', {
     method: 'POST', // or 'PUT'
     headers: {
        'Content-Type': 'application/json',
    },

     body: JSON.stringify(
      {"hid" : e.target[0].value,
      "pid" : e.target[1].value,
      "ref" : "yes",
      "name": e.target[2].value,
      "disease" :  e.target[3].value
      })
})

 .then(response => response.json())
 .then(data => {
 
 console.log("HI HELLO");
})
.catch((error) => {
//console.error('Error:', error);
});
}

  return (
    <>
      <div className="patientCard">
        <p className="patientName">{patientName}</p>
        <p className="patientDisease">Medical History: {patientDisease}</p>
        <p className="patientMobile">PId: {patientId}</p>
        <button className="myButton" onClick={handleShow}>Refer</button>

        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h1>Referal Form</h1>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit= {submitHandler}>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Hospital ID"
              name="hospitalID"
              style={{width: "75%"}}
            />
          </div>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient ID"
              name="patientID"
              style={{width: "75%"}}
            />
            
          </div>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient Name"
              name="patientName"
              style={{width: "75%"}}
            />
            
          </div>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient Disease"
              name="patientDisease"
              style={{width: "75%"}}
          
            />
          </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="btnContainer">
          <button className="modalBtn" onClick = {submitHandler}>Save Changes</button>
          </div>

        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default PatientCard;
