import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddNewContact = () => {
  const { store, actions } = useContext(Context);

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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label">
              Phone
            </label>
            <input
              type="email"
              className="form-control"
              id="phoneInput"
              placeholder="Enter phone"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="addressInput" className="form-label">
              Address
            </label>
            <input
              type="email"
              className="form-control"
              id="addressInput"
              placeholder="Enter address"
            />
          </div>
        </div>
        <br />
        <Link to="/">
          <button className="btn btn-primary">Back to Contacts</button>
        </Link>
      </div>
    </div>
  );
};
