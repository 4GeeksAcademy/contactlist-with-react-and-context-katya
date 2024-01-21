import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";


import "../../styles/home.css";

export const Home = () => {

	const [contact, setContact] = useState("");
	const { store, actions } = useContext(Context);

	return (
	
  <div className="d-flex justify-content-center mt-5">
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{store.contacts[0].name}</h5>
            <p className="card-text">
			{store.contact[0].email}, {store.contact[0].phone}
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
	);
};
