import React from "react";
import CustomModal from "../CustomModal/CustomModal";

function ContactDetails(props) {
  const { details, onDismiss } = props;
  const _renderFooter = () => (
    <button className="btn btn-danger" onClick={onDismiss}>
      Close
    </button>
  );
  const _renderHeader = () => <h5 className="card-title">Contact Details</h5>;

  return (
    <CustomModal renderFooter={_renderFooter} renderHeader={_renderHeader}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{details.first_name}</li>
        <li className="list-group-item">{details.last_name}</li>
        <li className="list-group-item">{details.email}</li>
        <li className="list-group-item">{details.country_id}</li>
      </ul>
    </CustomModal>
  );
}

export default ContactDetails;
