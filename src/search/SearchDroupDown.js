import React from "react";

const SearchDroupDown = () => {
  return (
    <div>
      <div class="dropdown">
        <button style={{ fontWeight: "bold" }} class="dropbtn">
          <i class="fa-solid fa-caret-down mx-2"></i>Search with....
        </button>
        <div class="dropdown-content">
          <div>best seller</div>
          <div>From highest to lowest price</div>
          <div>From lowest to highest price</div>
          <div>From lowest to highest price</div>
        </div>
      </div>
    </div>
  );
};

export default SearchDroupDown;
