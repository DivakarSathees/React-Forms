import React from 'react'
// import './contact.css'

const Contact = () => {
  return (
    <div data-testid='contact'>
     
        <h1>Contact Us</h1>
        <p>You can contact us using the information below:</p>
        <ul style={{textAlign: 'center'}}>
            <li style={{textAlign: 'center', fontSize: '1.2rem', listStyle: 'none'}}>Email: travel@website.com</li>
            <li style={{textAlign: 'center', fontSize: '1.2rem', listStyle: 'none'}}>Phone: 1234567890</li>
            <li style={{textAlign: 'center', fontSize: '1.2rem', listStyle: 'none'}}>Address: Coimbatore</li>
        </ul>
    </div>
   
  )
}

export default Contact
