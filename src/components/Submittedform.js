import React from 'react'
import { useLocation } from 'react-router-dom'

const Submittedform = () => {

  const {state} = useLocation();

// console.log(history.location.pathname);
  return (
    <div data-testid='submitted-form'>
      <h1>Submitted Form</h1>
      <center>
      <table>
        <tr>
          <td>Name</td><td>&nbsp;:&nbsp;</td><td>{state.formData.name}</td>
        </tr>
        <tr>
          <td>Email</td><td>&nbsp;:&nbsp;</td><td>{state.formData.email}</td>
        </tr>
        <tr>
          <td>Phone</td><td> &nbsp;:&nbsp;</td><td>{state.formData.phone}</td>
        </tr>
        <tr>
          <td>PassPort</td><td> &nbsp;:&nbsp;</td><td>{state.formData.passport}</td>
        </tr>
        <tr>
          <td>Travel Date</td><td> &nbsp;:&nbsp;</td><td>{state.formData.travelDate}</td>
        </tr>
        <tr>
          <td>Return Date</td><td> &nbsp;:&nbsp;</td><td>{state.formData.returnDate}</td>
        </tr>
        <tr>
          <td>Destination</td><td> &nbsp;:&nbsp;</td><td>{state.formData.destination}</td>
        </tr>
        <tr>
          <td>Reason</td><td> &nbsp;:&nbsp;</td><td>{state.formData.reason}</td>
        </tr>
      </table>
      </center>


    </div>
  )
}

export default Submittedform
