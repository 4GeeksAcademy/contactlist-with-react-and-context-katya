import React, { useContext, useEffect } from "react";
import { ContactCard } from "../component/contactCard";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadSomeData();
  }, [store.contacts]);
  
  return (
    <div>
      {store.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <nav className="navbar navbar-light mb-3 justify-content-center">
            <div
              style={{ width: "1030px" }}
              className="d-flex justify-content-between"
            >
              <Link to="/addnewcontact">
                <button className="btn btn-success">Add a new contact</button>
              </Link>
              {store.contacts.length > 0 && (
                <div>
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteAllAlert"
                  >
                    Delete all contacts
                  </button>
                  <div
                    className="modal fade"
                    id="deleteAllAlert"
                    tabIndex="-1"
                    aria-labelledby="deleteAllAlertLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title text-danger" id="deleteAllAlertLabel">
                            Warning
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">Are you sure you want to delete all the contacts?</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-success"
                            data-bs-dismiss="modal"
                            onClick={actions.deleteAllContacts}
                          >
                            Confirm
                          </button>
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> 
                            Back to contacts
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                index={index}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
