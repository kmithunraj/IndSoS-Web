import { Link } from "react-router-dom";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css";
import logo from "./img/logo.png";

const Sidebar = () => {

const removeActiveLink = () => {
    const activeLink = document.querySelector(".activeLink");
    activeLink.classList.remove("activeLink");
  };

  const dashboardlink = () =>{ 
    removeActiveLink();
    document.getElementById("dashboardLink").classList.add("activeLink"); 
  }
  const manageteamlink = () =>{
    removeActiveLink();
    document.getElementById("manageteamLink").classList.add("activeLink");
  }
  const statementlink = () =>{
    removeActiveLink();
    document.getElementById("statementLink").classList.add("activeLink");
  }
  const analyticslink = () =>{
    removeActiveLink();
    document.getElementById("analyticsLink").classList.add("activeLink");
  }
  const resourceslink = () =>{
    removeActiveLink();
    document.getElementById("resourcesLink").classList.add("activeLink");
  }
  const settingslink = () =>{
    removeActiveLink();
    document.getElementById("settingsLink").classList.add("activeLink");
  }
  const searchlink = () =>{
    removeActiveLink();
    document.getElementById("searchLink").classList.add("activeLink");
  }




  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="dashboardLogo" />

      <hr className="line" />

      <div className="sidebarProfile">
        <i className="bi bi-person-circle"></i>
        <p id="employeeName">Abinov Bruce</p>
        <p id="employeeID">JDH56896</p>
      </div>

      <div className="sidebarMenu">
        <Link to="/Dashboard" className="activeLink sidebarMenuLink" id="dashboardLink"  onClick={dashboardlink}>
          <i class="bi bi-house"></i> Dashboard
        </Link>
        <Link to="/Search" id="searchLink" className="sidebarMenuLink" onClick={searchlink}>
          <i class="bi bi-search"></i> Search
        </Link>
        <Link to="/ManageTeam" className="sidebarMenuLink" id="manageteamLink" onClick={manageteamlink}>
          <i class="bi bi-people"></i> Manage Team
        </Link>
        <Link to="/Statement" className="sidebarMenuLink" id="statementLink" onClick={statementlink}>
          <i class="bi bi-file-earmark"></i> Statement
        </Link>
        <Link to="/Analytics" className="sidebarMenuLink" id="analyticsLink" onClick={analyticslink}>
          <i class="bi bi-bar-chart"></i> Analytics
        </Link>
        <Link to="/Resources" id="resourcesLink" className="sidebarMenuLink" onClick={resourceslink}>
          <i class="bi bi-box"></i> Resources
        </Link>
        <Link to="/Settings" id="settingsLink" className="sidebarMenuLink" onClick={settingslink}>
          <i class="bi bi-gear"></i> Settings
        </Link>
      </div>

      <hr className="line" />

      <div className="logoutdiv">
        <button className="logoutButton"><i class="bi bi-box-arrow-right"></i> LOGOUT</button>
      </div>
    </div>
  );
};

export default Sidebar;
