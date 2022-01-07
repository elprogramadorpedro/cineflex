import React from "react";
import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <>
      <Link to="/">
        <div className="headers">
          <h1>CINEFLEX</h1>
        </div>
      </Link>
    </>
  );
}
