import React from "react";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css"

const Dashboard = () => {


    return (

        <div className="pageWrapper">

            <div className="boxWrapper">

            <div className="box">


            </div>

            <div className="box">


            </div>

            <div className="box">


            </div>

            </div>

            <div className="activeAlerts">
                <h1>Active Alerts</h1>
                <hr className="line" />

                <div className="activeAlertWrapper">

                <div className="activeAlert">

                    <div className="redBox"></div>

                        <div className="detailsHeader">
                            <h3>Name:</h3>
                            <h3>From:</h3>
                            <h3>Location:</h3>
                            <h3 className="detailsAddress">Address:</h3>
                            <h3>Problem:</h3>
                            <h3>Intensity:</h3>
                        </div>

                        <div className="detailsContent">
                            <p>K Mithun Raj</p>
                            <p>Civilian</p>
                            <p>13.0827° N, 80.2707° E</p>
                            <p  className="detailsAddress">No.43, 5th Street, Bharathi Nagar, Muthapudupet, IAF, Chennai - 600055</p>
                            <p>Flood</p>
                            <p>High</p>
                        </div>

                        <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6935249740864!2d77.58884117863154!3d12.991443554646015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17880edac11f%3A0x20fdecf5c6eca808!2sHotels%20in%20Shimoga!5e0!3m2!1sen!2sin!4v1696174916310!5m2!1sen!2sin" width="280" height="245" style={{border:'0', margin:'5px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            
</div>

                </div>                

            </div>

            </div>



        </div>
    );
}

export default Dashboard;