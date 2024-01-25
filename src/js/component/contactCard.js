import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useNavigate} from "react-router-dom";

export const ContactCard = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function navigateBack() {
    actions.changeView();
    navigate("/");
  }

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
        {!store.isInSingleView && (<Link to={`/single/${props.id}`}>
            <button onClick={() => {actions.openContact(props.id)}} type="button" className="btn">
              <i className="fas fa-pencil-alt"></i>
            </button>
          </Link>)}
          

          <button
            type="button"
            className="btn me-4"
            data-bs-toggle="modal"
            data-bs-target={`#deleteAlert-${props.id}`}
          >
            <i className="fas fa-trash"></i>
          </button>
          <div
            className="modal"
            id={`deleteAlert-${props.id}`}
            tabIndex="-1"
            aria-labelledby={`deleteAlertLabel-${props.id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteAlertLabel">
                    Are you sure?
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {props.name} will be erased permanently
                </div>
                <div className="modal-footer">
                  <button
                    onClick={() => actions.deleteContact(props.id, props.index, navigateBack)}
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
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
};
