import React from "react";
function Search(props) {
  function handleSearch(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="container bg-transparent">
        <div className="form-floating mb-3 text-center">
          <input
            type="text"
            className={`form-control my-4 bg-transparent text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            id="floatingInput"
            placeholder="Type To Search"
            onKeyUp={handleSearch}
          />
          <label htmlFor="floatingInput">Search</label>
        </div>
      </div>
    </>
  );
}

export default Search;
