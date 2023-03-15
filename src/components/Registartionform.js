import React, {useState} from 'react'
import './Registrationform.css'
import { useNavigate } from 'react-router-dom'

const Registrationform = () => {

    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    passport: '',
    travelDate: '',
    returnDate: '',
    destination: '',
    reason: '',
    })

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: '',
        passport: '',
        travelDate: '',
        returnDate: '',
        destination: '',
        reason: '',
    })

    const inputChange = (event) => {
        const {name, value} = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors ={};
        if (!formValues.name.trim()) {
            errors.name = 'Name is required';
          }
          if (!formValues.email.trim()) {
            errors.email = 'Email is required';
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
            errors.email = 'Email is invalid';
          }
          if (!formValues.phone.trim()) {
            errors.phone = 'Phone number is required';
          } else if (!/^[0-9]{10}$/.test(formValues.phone.trim())) {
            errors.phone = 'Phone number is invalid';
          }
          if (!formValues.passport.trim()) {
            errors.passport = 'Passport number is required';
          }
          if (!formValues.travelDate.trim()) {
            errors.travelDate = 'Travel date is required';
          }
          if (!formValues.returnDate.trim()) {
            errors.returnDate = 'Return date is required';
          } 
           if (formValues.returnDate < formValues.travelDate) {
            errors.returnDate = 'Return date should be after travel date';
          }
          if (!formValues.destination.trim()) {
            errors.destination = 'Destination is required';
          }
          if (!formValues.reason.trim()) {
            errors.reason = 'Reason for travel is required';
          }

          if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
          } else 
          {
            // console.log("Success")
            // <Navigate to='/submittedform'/>
            // history.push({
            //   pathname: '/submittedform',
            //   state: { formData }
            // });
            navigate('/submittedform',{state:{formData: formValues}});
          }

    }

  return (
    <form data-testid="registration-form" className='form' onSubmit={handleSubmit}>
        <div className='title'>
            Registration Form

        </div>
        
        <div className='field'>
        <label htmlFor="name">Name:</label>
        <input className='input'
          type="text"
          id="name"
          name="name"
          placeholder='Full Name'
          value={formValues.name}
          onChange={inputChange}
        />
        {formErrors.name && <span>{formErrors.name}</span>}
        </div>
        <div className='field'>
        <label htmlFor="email">Email:</label>
        <input className='input'
          type="email"
          id="email"
          name="email"
          placeholder='abc@gmail.com'
          value={formValues.email}
          onChange={inputChange}
        />
        {formErrors.email && <span>{formErrors.email}</span>}
      </div>
      <div className='field'>
        <label htmlFor="phone">Phone:</label>
        <input className='input'
          type="tel"
          id="phone"
          name="phone"
          placeholder='1234567890'
          value={formValues.phone}
          onChange={inputChange}
        />
        {formErrors.phone && <span>{formErrors.phone}</span>}
      </div>
      <div className='field'>
        <label htmlFor="passport">Passport:</label>
        <input className='input'
          type="text"
          id="passport"
          name="passport"
          placeholder='zxc123asd'
          value={formValues.passport}
          onChange={inputChange}
          />
          {formErrors.passport && <span>{formErrors.passport}</span>}
          </div>
          <div className='field'>
          <label htmlFor="travelDate">Travel date:</label>
          <input className='input'
                 type="date"
                 id="travelDate"
                 name="travelDate"
                 value={formValues.travelDate}
                 onChange={inputChange}
               />
          {formErrors.travelDate && <span>{formErrors.travelDate}</span>}
          </div>
          <div className='field'>
          <label htmlFor="returnDate">Return date:</label>
          <input className='input'
                 type="date"
                 id="returnDate"
                 name="returnDate"
                 value={formValues.returnDate}
                 onChange={inputChange}
               />
          {formErrors.returnDate && <span>{formErrors.returnDate}</span>}
          </div>
          <div className='field'>
          <label htmlFor="destination">Destination:</label>
          <input className='input'
                 type="text"
                 id="destination"
                 name="destination"
                 value={formValues.destination}
                 onChange={inputChange}
               />
          {formErrors.destination && <span>{formErrors.destination}</span>}
          </div>
          <div className='field'>
          <label htmlFor="reason">Reason for travel:</label>
          <textarea className='input'
                 id="reason"
                 name="reason"
                 value={formValues.reason}
                 onChange={inputChange}
               />
          {formErrors.reason && <span>{formErrors.reason}</span>}
          </div>

      <button className='button' data-testid="button" type="submit">Submit</button>
      
    </form>
  )
}

export default Registrationform
