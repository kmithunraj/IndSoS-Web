import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css";

const Settings = () => {

    return(

        <div className="pageWrapper">
      


    <section className="card">
        <h2 className="h2-align">AGENCY PROFILE</h2>
        <label for="agency-name">Agency Name:</label>
        <input class="editable -input" type="text" id="agency-name" value="Kumananchavadi
Rescue Agency" readonly/>
        <label for="agency-description">Agency Description:</label>
        <input class="editable -input" type="text" id="agency-description" value="Kumanchavadi Rescue Agency is a dedicated organization committed to swift and effective disaster response, serving our community with unwavering dedication." readonly/>
    </section>

    <section className="card">
        <h2 className="h2-align">CONTACT INFORMATION</h2>
        <label for="agency-address">Address:</label>
        <input class="editable -input" type="text" id="agency-address" value=" 417, Trunk Rd, MSS Nagar, Kumananchavadi, Chennai, Tamil Nadu 600056
" readonly/>

        <label for="agency-phone">Phone Number:</label>
        <input class="editable -input" type="text" id="agency-phone" value="044 2627 4700
" readonly/>

        <label for="agency-email">Email Address:</label>
        <input class="editable -input" type="text" id="agency-email" value="fireandrescue@gmail.com" readonly/>
        
        <label for="agency-email">Website</label>
        <input class="editable -input" type="text" id="agency-email" value="www.kumananchavadirescueagency.com" readonly/>
        <div class="button-container">
        <button id="editButton">Edit</button>
        <button id="saveButton">Save</button>
    </div>
    </section>
    
   <div className="center-align">
    <section className="card h-increase">
    
            <h2 className="h2-align">SERVICES OFFERED</h2>
            <ul>
                <div className="left-align">
                <li>Search and Rescue</li>
                <li>Water Rescue</li>
                <li>Firefighting</li>
                <li>Medical Assistance</li>
                </div>
            </ul>
            <div class="button-container">
            <button>Add</button>
            </div>
        </section>
        
        </div>
        <footer>
        <p>&copy; 2023 Your Company Name</p>
    </footer>


    </div>

    );

};

export default Settings;