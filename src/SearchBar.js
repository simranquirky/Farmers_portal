import { useState } from "react";
import data from "./data1.json";

 const searchRestaurant =(searchtext) => {
    return data.filter((res)=> res.name.toLocaleLowerCase().includes(searchtext.toLocaleLowerCase()))
    // filtering is done based on whether the product name contains the search text.
    // there can be a mismatch as JS is case sensitive, so we convert both the search text and product name to lower case
};

const SearchBar = ({setfilteredresults}) => {
    
    const [searchtext,setsearchtext] = useState("hello");
    // searchtext is by default given the value "hello" using the useState()
    // while using useState() function, we can define two variables 
    // one for storing the value and one for changing the value stored in first variable.
    // Here searchtext is for storing const val, and setsearchtext is used to update/change the value stored in searchtext
    return (
    <div  className="search" >
        <form
        onSubmit={(e)=>
        {
            e.preventDefault(); 
            // this is used to prevent default action specified in the function
            const filteredresults = searchRestaurant(searchtext); 
    // searchRestaurant function is called with searchtext as input paramter
    // the result of all the products matching the text is stored in the form of array object in the variable filteredresults
        setfilteredresults(filteredresults);
        //
        }}>
        <input
            id="product" className="search-product"
            placeholder="search for products here"
            value={searchtext}
            onChange= {
                (e)=> {
                        setsearchtext(e.target.value);
                }
            }>
            </input>
            <button className="search-button">Search</button>
        </form>
    </div>
) };

export default SearchBar;