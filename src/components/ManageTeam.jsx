import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

const ManageTeam = () => {

    return(

        <div className="pageWrapper">

            <div className="manageTeamMembers">
                <h1>Team Members    <button>+ New Member</button></h1>
                <hr className="line" />

                <div className="membersWrapper">

                <div className="teamMember">
                    <i className="bi bi-person-circle"></i>

                    <div className="teamMemberInfo">
                        <h2>John Doe</h2>
                        <p>7876555</p>
                    </div>

                    <div className="memberBtn">
                        <button>Edit</button>
                        <button >Delete</button>
                    </div>
                </div>
                
                <div className="teamMember">
                    <i className="bi bi-person-circle"></i>

                    <div className="teamMemberInfo">
                        <h2>Rebin Mark</h2>
                        <p>7877655</p>
                    </div>

                    <div className="memberBtn">
                        <button>Edit</button>
                        <button >Delete</button>
                    </div>
                </div>

                <div className="teamMember">
                    <i className="bi bi-person-circle"></i>

                    <div className="teamMemberInfo">
                        <h2>David</h2>
                        <p>7876095</p>
                    </div>

                    <div className="memberBtn">
                        <button>Edit</button>
                        <button >Delete</button>
                    </div>
                </div>

                
                <div className="teamMember">
                    <i className="bi bi-person-circle"></i>

                    <div className="teamMemberInfo">
                        <h2>Ashwin Ravichandran</h2>
                        <p>7823095</p>
                    </div>

                    <div className="memberBtn">
                        <button>Edit</button>
                        <button >Delete</button>
                    </div>
                </div>

                <div className="teamMember">
                    <i className="bi bi-person-circle"></i>

                    <div className="teamMemberInfo">
                        <h2>Sanchay</h2>
                        <p>7876095</p>
                    </div>

                    <div className="memberBtn">
                        <button>Edit</button>
                        <button >Delete</button>
                    </div>
                </div>

                <div className="teamMember">
                    <i className="bi bi-person-circle"></i>

                    <div className="teamMemberInfo">
                        <h2>Arvind</h2>
                        <p>7876095</p>
                    </div>

                    <div className="memberBtn">
                        <button>Edit</button>
                        <button >Delete</button>
                    </div>
                </div>

                <div className="teamMember">
                    <i className="bi bi-person-circle"></i>

                    <div className="teamMemberInfo">
                        <h2>Aravin Takshan</h2>
                        <p>7802095</p>
                    </div>

                    <div className="memberBtn">
                        <button>Edit</button>
                        <button >Delete</button>
                    </div>
                </div>

                <div className="teamMember">
                    <i className="bi bi-person-circle"></i>

                    <div className="teamMemberInfo">
                        <h2>Praveen Mudhiraj</h2>
                        <p>7871095</p>
                    </div>

                    <div className="memberBtn">
                        <button>Edit</button>
                        <button >Delete</button>
                    </div>
                </div>

                <div className="teamMember">
                    <i className="bi bi-person-circle"></i>

                    <div className="teamMemberInfo">
                        <h2>Pravin Kumar</h2>
                        <p>7876295</p>
                    </div>

                    <div className="memberBtn">
                        <button>Edit</button>
                        <button >Delete</button>
                    </div>
                </div>

                </div>

            </div>

        </div>

    );

};

export default ManageTeam;