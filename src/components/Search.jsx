import React from "react";  
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css";

const Search = () => {
    
        return(
    
            <div className="pageWrapper">

                <div className="searchWrapper">

                <input type="text" id="searchtext" />

                <button type="button" id="searchBtn"><i className="bi bi-search"></i></button>

                </div>

                <div className="mapWrapper">


                </div>
    
            </div>
    
        );
    
    };

export default Search;