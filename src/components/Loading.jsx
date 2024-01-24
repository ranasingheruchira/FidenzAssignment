import React from "react";
import "../index.css";
import { loading_message } from "../constants/Constants";

export default function Loading() {
  return (
    <div className="error-container">
      <div className="error-msg-container">
        <h2>{loading_message}</h2>
      </div>
    </div>
  );
}
