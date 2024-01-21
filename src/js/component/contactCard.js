import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const ContactCard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mb-3" style={{ width: "1030px" }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={store.contact[0].photo}
            className="img-fluid rounded-circle m-3"
            alt="..."
            style={{ height: "150px" }}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title mb-3">{store.contact[0].name}</h5>
            <div className="card-text text-muted">
              <p className="mb-1">
                {" "}
                <i className="fas fa-map-marker-alt me-2"></i>
                {store.contact[0].address}
              </p>
              <p className="mb-1">
                {" "}
                <i className="fas fa-phone me-2"></i>
                {store.contact[0].phone}
              </p>
              <p className="mb-1">
                {" "}
                <i className="fas fa-envelope me-2"></i>
                {store.contact[0].email}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 mt-3 d-flex justify-content-end align-items-start">
          <button type="button" className="btn">
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button type="button" className="btn me-4">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
