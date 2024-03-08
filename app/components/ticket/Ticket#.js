import React from "react";
import Button from "../button/Button";

export default function () {
  return (
    <div
      className="card shadow h-100 "
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor : ''
      }}
    >
      <div className="card-body">
        <div className="row no-gutters align-items-center "
        
        >
          <div
          
            style={{
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'space-between',
                alignItems : 'center'
            }}
          >
           
            <i className="fas fa-file fa-2x text-red-300"></i>
           
            <span className="font-weight-normal  font-weight-normal text-secondary" >Your Ticket</span>
            <span className="font-weight-normal text-secondary ">Click here to see all your tickets</span>
           <div style={{marginTop : 10 }}> <Button class="btn btn-primary" text="See Tickets" /></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
