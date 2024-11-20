import React from 'react'

const Navbar = ({setSortData}) => {
  return (
    <div className="navbar">
      <div class="navbar-title">All Collection</div>
      <div class="navbar-sort">
        <select>
          <option value="default" onClick={() => setSortData("")}>Sort By</option>
          <option value="price-asc" onClick={() => setSortData("low")}>Price: Low to High</option>
          <option value="price-desc" onClick={() => setSortData("high")}>Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar
