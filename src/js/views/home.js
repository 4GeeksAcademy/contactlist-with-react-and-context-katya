import React, { useState, useEffect, useContext } from "react";
import { ContactCard } from "../component/contactCard";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  
  console.log(store.contact)
  return (
    <div>
      <nav className="navbar navbar-light mb-3 ">
        <div className="col-4 d-flex justify-content-end">
          <Link to="/addnewcontact">
            <button className="btn btn-success me-5">Add new contact</button>
          </Link>
        </div>
      </nav>
      <div className="d-flex justify-content-center mt-3">
        {store.contact.map((contact, index) => (
          <ContactCard
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            address={contact.address}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
