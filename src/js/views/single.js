import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState(store.singleContact.full_name || "");
  const [email, setEmail] = useState(store.singleContact.email || "");
  const [phone, setPhone] = useState(store.singleContact.phone || "");
  const [address, setAddress] = useState(store.singleContact.address || "");
  const params = useParams();

  function updateContact() {
	if (
		!(name.trim() && email.trim() && phone.trim() && address.trim())
	  ) {
		alert("Please enter contact information");
	  } else {
		actions.editContact(name, email, phone, address, store.singleContact.id)
	  }

  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="d-flex flex-column m-3 justify-content-center align-items-center">
        <ContactCard
          name={store.singleContact.full_name}
          email={store.singleContact.email}
          phone={store.singleContact.phone}
          address={store.singleContact.address}
          id={store.singleContact.id}
        />

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
          <button onClick={updateContact} className="btn btn-success mx-3 px-4">
            Save changes
          </button>
          <Link to="/">
            <button onClick={actions.changeView} className="btn btn-primary mx-3">Back to Contacts</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
