import React, { useState, useEffect, useContext} from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const { full_name, email, phone, address, id } = store.singleContact;
  const [inputName, setInputName] = useState(full_name || "");
  const [inputEmail, setInputEmail] = useState(email || "");
  const [inputPhone, setInputPhone] = useState(phone || "");
  const [inputAddress, setInputAddress] = useState(address || "");
  

  function updateContact() {
    if (!(inputName.trim() && inputEmail.trim() && inputPhone.trim() && inputAddress.trim())) {
      alert("Please enter contact information");
    } else if (
      inputName === full_name &&
      inputEmail === email &&
      inputPhone === phone &&
      inputAddress === address
    ) {
      alert("No changes detected");
    } else {
      actions.editContact(
        inputName,
        inputEmail,
        inputPhone,
        inputAddress,
        id
      );
    }
  }

  if (!id) {
    console.log("I am stuck")
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="d-flex flex-column m-3 justify-content-center align-items-center">
        <ContactCard
          name={full_name}
          email={email}
          phone={phone}
          address={address}
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
              placeholder={full_name}
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
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
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
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
              value={inputPhone}
              onChange={(e) => setInputPhone(e.target.value)}
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
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={updateContact} className="btn btn-success mx-3 px-4">
            Save changes
          </button>
          <Link to="/">
            <button
              onClick={actions.changeView}
              className="btn btn-primary mx-3"
            >
              Back to Contacts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
