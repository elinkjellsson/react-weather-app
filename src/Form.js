import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form">
        <div className="form-row">
          <div className="col-8 btn">
            <input
              type="text"
              className="form-control"
              placeholder="Search City"
              autoComplete="off"
              autoFocus="on"
              id="search-city-input"
            />
          </div>
          <div className="col-2 btn">
            <input
              type="submit"
              className="btn btn-primary"
              id="searchButton"
              value="Search"
            />
          </div>
          <div className="col-2 btn">
            <input
              type="button"
              className="btn btn-primary"
              id="locationButton"
              value="Current"
            />
          </div>
        </div>
      </form>
    </div>
  );
}