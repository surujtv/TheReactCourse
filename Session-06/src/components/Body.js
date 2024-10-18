import React, { useState, useEffect } from "react";
import { CartComponent } from "./CartComponent";

export const Body = () => {
  let [copyCardArray, setCopyCardArray] = useState([]);
  let [filteredArray, setFilteredArray] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [sortDown, setSortDown] = useState(false);
  let [sortDown1, setSortDown1] = useState(false);
  // console.log(searchText)

  // useEffect Hook -
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // console.log(data)
    setCopyCardArray(data);
    setFilteredArray(data);
  };

  const handleClick = () => {
    // console.log("button clicked")

    filteredArray = copyCardArray.filter(
      (obj, index) => obj.category == "jewelery"
    );
    setFilteredArray(filteredArray);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    handleSearch();
  };

  const 
  handleSearch = () => {
    const filteredArray = copyCardArray.filter((obj) => {
      return obj.title.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredArray(filteredArray);
  };

  const highToLow = () => {
    if (sortDown) {
      setFilteredArray(copyCardArray);
    } else {
      let sortedArray = [...filteredArray];
      sortedArray.sort((a, b) => b.price - a.price);
      setFilteredArray(sortedArray);
    }
    setSortDown(!sortDown);
    !sortDown ? setSortDown1(false) : null;
  };

  
  const lowToHigh = () => {
    if (sortDown1) {
      setFilteredArray(copyCardArray);
    } else {
      let sortedArray = [...filteredArray];
      sortedArray.sort((a, b) => a.price - b.price);
      setFilteredArray(sortedArray);
    }
    setSortDown1(!sortDown1);
    !sortDown1 ? setSortDown(false) : null;
  };

  // Shimmer UI -
  // This concept is known as conditional rendering. Instead of doing this use ternary operator below -

  /* 
    if(copyCardArray.length == 0){
      return <h1 style={{textAlign: "center", marginBlock: "355px"}}>Loading...</h1>
    }
  */

  return copyCardArray.length == 0 ? (
    <h1 style={{ textAlign: "center", marginBlock: "355px" }}>Loading...</h1>
  ) : (
    <main className="section-padding">
      {/* Event Handler */}
      <div className="search-filter">
        <button onClick={handleClick}>Top Ratings</button>
        <input
          type="text"
          className="search-bar"
          value={searchText}
          placeholder="Search..."
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>

        <button
          onClick={highToLow}
          style={
            sortDown ? { backgroundColor: "Brown", color: "aliceblue" } : null
          }
        >
          High to low
        </button>
        <button
          onClick={lowToHigh}
          style={
            sortDown1 ? { backgroundColor: "Brown", color: "aliceblue" } : null
          }
        >
          Low to high
        </button>
      </div>

      {/* Map function for Dynamic Rendering */}
      <div className="cart-container">
        {filteredArray.map((obj, index) => {
          return <CartComponent key={obj.id} data={obj} />;
        })}

        {/* {swgData.map((obj, index)=> <Swiggy key={obj.info.id} data={obj}/>)} */}
      </div>
    </main>
  );
};
