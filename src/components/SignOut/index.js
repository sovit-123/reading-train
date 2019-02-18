import React from "react";

import { withFirebase } from "../Firebase";

import "./SignOut.css";

const SignOutButton = ({ firebase }) => {
  return (
    <button
      type="button"
      onClick={firebase.doSignOut}
      className="sign-out-button"
    >
      Sign Out
    </button>
  );
};

export default withFirebase(SignOutButton);
