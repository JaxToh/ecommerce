import { useState } from 'react'

export default function ContactDetails() {
    const [formDetails, setFormDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        address: '',
        comments: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormDetails({ ...formDetails, [name]: value });
    }

    return (
        <form className="form">
        <input
          placeholder="First Name"
          name="firstName"
          value={formDetails.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={formDetails.lastName}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          name="email"
          value={formDetails.email}
          onChange={handleChange}
        />
        <input
          placeholder="Contact number"
          name="contact"
          value={formDetails.contact}
          onChange={handleChange}
        />
        <input
          placeholder="Address"
          name="address"
          value={formDetails.address}
          onChange={handleChange}
        />
        <input
          placeholder="Comments(optional)"
          name="comments"
          value={formDetails.comments}
          onChange={handleChange}
        />
        <button className="submit" 
          onClick={e => {
            e.preventDefault();
            alert(
                `We will get back to you within 1-3 business days with order confirmation and payment modes. Thank you for your interest!

Contact Summary:
                   Full Name: ${formDetails.firstName} ${formDetails.lastName}
                   Email: ${formDetails.email}
                   Contact: ${formDetails.contact}
                   Address: ${formDetails.address}
                   Comments(optional): ${formDetails.comments}`
                );
          }}
        >
          Submit
        </button>
      </form>
    )

}