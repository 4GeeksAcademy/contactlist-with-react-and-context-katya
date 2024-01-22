import React, { Component, useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types';
import { Context } from "../store/appContext";

export const ContactCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mb-3" style={{ width: "1030px" }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={store.photo}
            className="img-fluid rounded-circle m-3"
            alt="..."
            style={{ height: "150px" }}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title mb-3">{props.name}</h5>
            <div className="card-text text-muted">
              <p className="mb-1">
                {" "}
                <i className="fas fa-map-marker-alt me-2"></i>
                {props.address}
              </p>
              <p className="mb-1">
                {" "}
                <i className="fas fa-phone me-2"></i>
                {props.phone}
              </p>
              <p className="mb-1">
                {" "}
                <i className="fas fa-envelope me-2"></i>
                {props.email}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 mt-3 d-flex justify-content-end align-items-start">
          <button onClick={() => actions.editContact()} type="button" className="btn">
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button onClick={() => actions.deleteContact()} type="button" className="btn me-4">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
}