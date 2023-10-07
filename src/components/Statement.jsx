import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css";

const Statement = () => {
    
        return(
    
            <div className="pageWrapper">
    <div class="incident-container">
        <h2>Incident Information</h2>

     
        <label for="incident-type">Type of Incident:</label>
        <input class="incident-input" type="text" id="incident-type" value="Natural Disaster" readonly/>

        
        <label for="incident-date">Date:</label>
        <input class="incident-input" type="date" id="incident-date" value="2023-09-30" readonly/>
        <label for="incident-location">Location:</label>
        <input class="incident-input" type="text" id="incident-location" value="Porur,Chennai,TamilNadu" readonly/>

        <label for="incident-cause">Cause of Accident:</label>
        <input class="incident-input" type="text" id="incident-cause" value="Heavy Rainfall" readonly/>

        
        <label for="response-description">Description of Agency's Response Efforts:</label>
        <textarea class="incident-input" id="response-description" readonly>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at leo in nisi vestibulum porttitor.</textarea>

       
        <label for="resources-deployed">Resources Deployed:</label>
        <input class="incident-input" type="text" id="resources-deployed" value="Personnel, Equipment" readonly/>

     
        <label for="team-members">Team Members Involved:</label>
        <input class="incident-input" type="text" id="team-members" value="John Doe, Jane Smith" readonly/>

        <label for="persons-saved">Number of Persons Saved:</label>
        <input class="incident-input" type="text" id="persons-saved" value="5" readonly/>

        
        <label for="collaborations">Collaborations with Other Agencies/Organizations:</label>
        <input class="incident-input" type="text" id="collaborations" value="Ashok Pillar, Fire Department" readonly/>

        
        <button class="btn edit-btn" >Edit</button>
        <button class="btn save-btn" >Save</button>
  
    </div>

    <div class="incident-container">
        <h2>Incident Information</h2>

     
        <label for="incident-type">Type of Incident:</label>
        <input class="incident-input" type="text" id="incident-type" value="Fire Accident" readonly/>

        
        <label for="incident-date">Date:</label>
        <input class="incident-input" type="date" id="incident-date" value="2023-09-01" readonly/>
        <label for="incident-location">Location:</label>
        <input class="incident-input" type="text" id="incident-location" value="Guindy,Chennai" readonly/>

        <label for="incident-cause">Cause of Accident:</label>
        <input class="incident-input" type="text" id="incident-cause" value="Due to Crackers" readonly/>

        
        <label for="response-description">Description of Agency's Response Efforts:</label>
        <textarea class="incident-input" id="response-description" readonly>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at leo in nisi vestibulum porttitor.</textarea>

       
        <label for="resources-deployed">Resources Deployed:</label>
        <input class="incident-input" type="text" id="resources-deployed" value="Personnel, Equipment" readonly/>

     
        <label for="team-members">Team Members Involved:</label>
        <input class="incident-input" type="text" id="team-members" value="John Doe, Jane Smith" readonly/>

        <label for="persons-saved">Number of Persons Saved:</label>
        <input class="incident-input" type="text" id="persons-saved" value="4" readonly/>

        
        <label for="collaborations">Collaborations with Other Agencies/Organizations:</label>
        <input class="incident-input" type="text" id="collaborations" value="Egmore, Fire Department" readonly/>

        
        <button class="btn edit-btn" >Edit</button>
        <button class="btn save-btn" >Save</button>
  
    </div>
            </div>
    
        );
    
    };

export default Statement;
