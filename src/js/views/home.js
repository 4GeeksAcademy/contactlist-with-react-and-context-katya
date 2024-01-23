import React, { useContext } from "react";
import { ContactCard } from "../component/contactCard";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {

  const { store, actions } = useContext(Context);

  return (
    <div>
    {store.loading ? (
      <p>Loading...</p>
    ) : (
      <>
        <nav className="navbar navbar-light mb-3 justify-content-center">
          <div style={{ width: "1030px" }} className="d-flex">
            <Link to="/addnewcontact">
              <button className="btn btn-success me-5">Add a new contact</button>
            </Link>
          </div>
        </nav>

        {store.contacts.map((contact, index) => (
          <div key={index} className="d-flex justify-content-center mt-3">
            <ContactCard
              name={contact.full_name}
              email={contact.email}
              phone={contact.phone}
              address={contact.address}
              id={contact.id}
            />
          </div>
        ))}
      </>
    )}
  </div>
  );
};
