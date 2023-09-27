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

                    /*  AIzaSyB1o4H1ZXYqJS1oHeJtlWlZTr6R6lhGUkw */

                </div>
    
            </div>
    
        );
    
    };

export default Search;