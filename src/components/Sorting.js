import React from "react";
function Sorting(props) {
  return (
    <div>
      <div className="container">
        <div
          className="btn-group d-flex"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <input type="checkbox" className="btn-check" id="btncheck1" />
          <label
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } flex-grow-1`}
            htmlFor="btncheck1"
          >
            All-Task
          </label>

          <input type="checkbox" className="btn-check" id="btncheck2" />
          <label
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } flex-grow-1`}
            htmlFor="btncheck2"
          >
            Completed-Task
          </label>

          <input type="checkbox" className="btn-check" id="btncheck3" />
          <label
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } flex-grow-1`}
            htmlFor="btncheck3"
          >
            Remaining-Task
          </label>
        </div>
      </div>
    </div>
  );
}

export default Sorting;
