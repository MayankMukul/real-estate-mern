import React, { useState } from 'react'
import './searchbar.scss';

export default function SearchBar() {

  const types = ["Buy", "Rent"];

  const [query, setQuery] = useState({
    type: "Buy",
    location: null,
    minPrice: 0,
    maxPrice: 0,
  })

  const switchType = (val)=>{
    setQuery((prev)=>({...prev, type:val}))
  }
  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button key={type} className={query.type == type ? "active":""}
          onClick={()=>{
            switchType(type)
          }}>
            {type}
          </button>
        ))}
      </div>

      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={100000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000}
          placeholder="Max Price"
        />
      </form>

      <button>Search</button>
    </div>
  );
}
