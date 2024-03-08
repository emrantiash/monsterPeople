import React from 'react'
import Button from '../button/Button'

export default function Submit() {
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
      <div className="row no-gutters align-items-center">
        <div
        // className="text-xs text-secondary text-uppercase mb-1"
          style={{
              display : 'flex',
              flexDirection : 'column',
              justifyContent : 'space-between',
              alignItems : 'center'
          }}
        >
          <i className="fas fa-mail-bulk fa-2x text-blue-300"></i>
          <span className="font-weight-normal"> Submit Ticket</span>
          <span >Click here to submit your tickets</span>
         <div style={{marginTop : 10 }}> <Button class="btn btn-primary" text="Submit Tickets" /></div>
        </div>
      </div>
    </div>
    
  </div>
  )
}
