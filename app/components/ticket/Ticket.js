import React from "react";
import Button from "../button/Button";
import Switch from "../switch/Switch";

const top = 20;
const normal = { fontWeight: "normal", color: "#000" };



export default function Ticket() {
  return (
    <div
      className="card shadow h-100 "
      style={{
        backgroundColor: "",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="card-body" style={{ 
        // backgroundColor: "red" ,
    display : 'flex',
    justifyContent : 'center'
    }}>
        <div
          className="row no-gutters align-items-center"
          style={{ backgroundColor: "" }}
        >
          <div className="col mr-2" style={{ backgroundColor: "" }}>
            <div className="text-xs font-weight-normal text-primary  ">
              <div
                style={{
                  margin: 5,
                  padding: 5,
                }}
              >
                <div
                  className="card-body shadow"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <i className="fas fa-file fa-2x text-red-300"></i>

                      <span className="font-weight-normal  font-weight-normal text-secondary">
                        Your Ticket
                      </span>
                      <span className="font-weight-normal text-secondary ">
                        Click here to see all your tickets
                      </span>
                      <div style={{ marginTop: 10 }}>
                        {" "}
                        <Button class="btn btn-primary" text="See Tickets" />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    // margin: 5,
                  }}
                ></div>

<div
                  className="card-body shadow"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <i className="fas fa-file fa-2x text-red-300"></i>

                      <span className="font-weight-normal  font-weight-normal text-secondary">
                        Submit a Requestß
                      </span>
                      <span className="font-weight-normal text-secondary ">
                        Click here to submit your request
                      </span>
                      <div style={{ marginTop: 10 }}>
                        {" "}
                        <Button class="btn btn-primary" text="Create Ticket" />
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
