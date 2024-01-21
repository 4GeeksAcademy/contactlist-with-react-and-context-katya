import React from "react";
import { ContactCard } from "../component/contactCard";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => (
	/*{store.demo.map((item, index) => {})*/
  <div>
    <nav className="navbar navbar-light mb-3 ">
      <div className="col-4 d-flex justify-content-end">
        <Link to="/addnewcontact">
          <button className="btn btn-success me-5">Add new contact</button>
        </Link>
      </div>
    </nav>
    <div className="d-flex justify-content-center mt-3">
      <ContactCard />
    </div>
  </div>
);
