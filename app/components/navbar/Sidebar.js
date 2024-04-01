import React from "react";
import Link from "next/link";
import useIsAccess from "@/app/lib/hooks/isAccess";

export default function Sidebar() {
    const isAccess = useIsAccess()
    // console.log(isAccess)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <ul
        // className="navbar-nav bg-gradient-light sidebar sidebar-dark accordion"
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"

        style={{backgroundColor : 'red'}}
        id="accordionSidebar"
      >
         <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-1">Monstar People</div>
            </a>

        {/* <hr className="sidebar-divider my-0" /> */}

        <li className="nav-item active">
          <Link className="nav-link" href="/">
            <i className="fas fa-home" color="#000"></i>
            <span>Home</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <li className="nav-item ">
          <Link className="nav-link" href="/dashboard">
            <i className="fas fa-table" color="#000"></i>
            <span>Dashboard</span>
          </Link>
        </li>
       
        {/* <div className="sidebar-heading">Interface</div> */}
        
        <li className="nav-item">
          <a className="nav-link" href="/my-info">
            <i className="fas fa-user"></i>
            <span>My Info</span>
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/people">
          <i className="fas fa-users"></i>
            <span>People</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href=""
            data-toggle="collapse"
            data-target="#collapsePagesReport"
            aria-expanded="true"
            aria-controls="collapsePages99"
          >
            <i className="fas fa-folder"></i>
            <span>Reports </span>
          </a>
          <div
            id="collapsePagesReport"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Login Screens:</h6> */}
              <Link className="collapse-item" href="/setting/org-profile">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-folder"></i>
                </span>
                <span> Report 1</span>
              </Link>
              
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-calendar"></i>
                </span>
                <span> Report 2 </span>
              </a>
              
            </div>
          </div>
        </li>
{
    isAccess[1] &&
    <li className="nav-item">
    <a
      className="nav-link collapsed"
      href=""
      data-toggle="collapse"
      data-target="#collapsePagesPayroll"
      aria-expanded="true"
      aria-controls="collapsePagesPayroll"
    >
      <i className="fas fa-comment-dollar"></i>
      <span>Payroll </span>
    </a>
    <div
      id="collapsePagesPayroll"
      className="collapse"
      aria-labelledby="headingPages"
      data-parent="#accordionSidebar"
    >
      <div className="bg-white py-2 collapse-inner rounded">
        <Link className="collapse-item" href="/setting/org-profile">
          <span style={{ color: "", size: 30 }}>
            
          </span>
          <span> Dashboard</span>
        </Link>
        
        <a className="collapse-item" href="blank.html">
          <span style={{ color: "", size: 30 }}>
           
          </span>
          <span> Pay Runs </span>
        </a>
        <a className="collapse-item" href="blank.html">
          <span style={{ color: "", size: 30 }}>
           
          </span>
          <span> Revision </span>
        </a>
        <a className="collapse-item" href="blank.html">
          <span style={{ color: "", size: 30 }}>
            
          </span>
          <span> Loan </span>
        </a>
        
      </div>
    </div>
  </li>
}
       
        <li className="nav-item">
        <a
            className="nav-link collapsed"
            href=""
            data-toggle="collapse"
            data-target="#collapsePagesMaster"
            aria-expanded="true"
            aria-controls="collapsePagesMaster"
          >
            <i className="fas fa-table-tennis"></i>
            <span>Master </span>
          </a>
          <div
            id="collapsePagesMaster"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Login Screens:</h6> */}
              <a className="collapse-item" href="/employment">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-user-friends"></i>
                </span>
                <span> Employment Type</span>
              </a>

              <a className="collapse-item" href="/division">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-home"></i>
                </span>
                <span> Division </span>
              </a>
              <a className="collapse-item" href="/department">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-calculator"></i>
                </span>
                <span> Department </span>
              </a>
              <Link className="collapse-item" href="/master/location">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-location-arrow"></i>
                </span>
                <span> Location </span>
              </Link>
              <a className="collapse-item" href="/designation">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-birthday-cake"></i>
                </span>
                <span> Designation </span>
              </a>
              <a className="collapse-item" href="/bank">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-home"></i>
                </span>
                <span> Bank </span>
              </a>
              
              {/* <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-calendar"></i>
                </span>
                <span> Report 2 </span>
              </a> */}
              
            </div>
          </div>
        </li>
      

    
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href=""
            data-toggle="collapse"
            data-target="#collapsePages99"
            aria-expanded="true"
            aria-controls="collapsePages99"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Setting </span>
          </a>
          <div
            id="collapsePages99"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Login Screens:</h6> */}
              <Link className="collapse-item" href="/setting/org-profile">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-building fa-x"></i>
                </span>
                <span> Organization Profile</span>
              </Link>
              <a className="collapse-item" href="register.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-virus fa-x"></i>
                </span>
                <span> Social Security</span>
              </a>
              <a className="collapse-item" href="/salary-component">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-calculator fa-x"></i>
                </span>
                <span> Salary Components</span>
              </a>
              <div className="collapse-divider"></div>
              {/* <h6 className="collapse-header">Other Pages:</h6> */}
              <a className="collapse-item" href="/salary-templates">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-money-bill fa-x"></i>
                </span>
                <span> Salary Templates</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-memory"></i>
                </span>
                <span> Employer Details</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-calendar"></i>
                </span>
                <span> Pay Schedule</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-bars"></i>
                </span>
                <span> Preferences</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-user"></i>
                </span>
                <span> User & Roles</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-tags"></i>
                </span>
                <span> Roporting Tags</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-envelope"></i>
                </span>
                <span> Email Templates</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-chalkboard"></i>
                </span>
                <span> Templates</span>
              </a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </div>
  );
}
