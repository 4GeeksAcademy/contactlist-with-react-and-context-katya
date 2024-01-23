import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddNewContact = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function saveContact() {
    if (
      !(name.trim() && email.trim() && phone.trim() && address.trim())
    ) {
      alert("Please enter contact information");
    } else {
      actions.addContact(name, email, phone, address);
      alert(`${name} has been added to your contacts`);
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column m-3 justify-content-center align-items-center">
        <h1 className="ms-3">Add a new contact</h1>
        <div
          className="input-group m-3 d-flex flex-column"
          style={{ width: "1030px" }}
        >
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label">
              Phone
            </label>
            <input
              type="phone"
              className="form-control"
              id="phoneInput"
              placeholder="Enter phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="addressInput" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="addressInput"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button onClick={saveContact} className="btn btn-success mx-3 px-4">
            Save
          </button>
          <Link to="/">
            <button className="btn btn-primary mx-3">Back to Contacts</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
