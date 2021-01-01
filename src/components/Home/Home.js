import React from "react";
import { useNavigate } from "react-router-dom";
import Contacts from "../Contacts/Contacts";

import "./Home.scss";

function Home({ contacts }) {
  const navigate = useNavigate();

  const handleClick = (countryId) => {
    let routePath = "/contacts";

    if (countryId) {
      routePath = `${routePath}?countryId=${countryId}`;
    }

    navigate(routePath);
  };

  return (
    <div>
      <button className="btn button-a" onClick={() => handleClick()}>
        Button A
      </button>
      <button className="btn button-b" onClick={() => handleClick(226)}>
        Button B
      </button>
      {contacts && <Contacts />}
    </div>
  );
}

export default Home;
