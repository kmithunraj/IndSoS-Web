import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css";

const Alertbar = () => {

    const longitude = 72.8333;
    const latitude = 18.9217;

    return (

        <div className="Alertbar">

            <h2 className="alertbarHeader">ALERT</h2>

            <hr className="line" />

            <div className="alertinfoWrapper">

            </div>

            <div className="alertmapWrapper">

                <div id="map">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6935249740864!2d77.58884117863154!3d12.991443554646015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1646db287a35%3A0xa12a9986d54a928b!2sDesserted%20Caf%C3%A9%20%26%20Patisserie!5e0!3m2!1sen!2sin!4v1696175417394!5m2!1sen!2sin" width="320" height="305" style={{border:'0', margin:'5px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>

            </div>

        </div>

    );


};

export default Alertbar;