import React from "react";
import "../index.css";
import { error_message } from "../constants/Constants";

export default function Error() {
  return (
    <div className="error-container">
      <div className="error-msg-container">
        <h2>{error_message}</h2>
      </div>
    </div>
  );
}
