import React from "react";
import Button from "../button/Button";
import Switch from "../switch/Switch";

const top = 20;
const normal = { fontWeight: "normal", color: "#000" };

export default function Duration() {
  return (
    <div
      className="card shadow h-100 "
      style={{
        backgroundColor: "",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className="card-body"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="row no-gutters align-items-center"
          style={{
            backgroundColor: "",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="col mr-2" style={{ backgroundColor: "" }}>
            <div
              className="text-xs font-weight-normal text-primary  "
              style={{
                backgroundColor: "",
                width: "100%",
              }}
            >
              {/* first row */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h5
                  style={{
                    color: "#37B5A7",
                  }}
                >
                  10:34
                </h5>
                <span>23 April 2024</span>
              </div>
              <div
                style={{
                  marginTop: top,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* 2nd row */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div className="card shadow h-100 ">
                    <div
                      className="card-body"
                      style={{
                        backgroundColor: "#37B5A7",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "none",
                      }}
                    >
                      <span style={normal}>Shift Duration</span>
                      <span style={normal}>06h 08m</span>
                    </div>
                  </div>
                  <div className="card  shadow h-100 ">
                    <div
                      className="card-body"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "none",
                      }}
                    >
                      <span style={normal}> Break</span>
                      <span style={normal}>01h 08m</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3rd row address */}
              <div
                style={{
                  //  backgroundColor : 'red',
                  marginTop: top,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  textTransform: "none",
                }}
              >
                <i className="fas fa-map-marker "></i>
                <span style={{}}>22,Paragoan Tower , Mohakhali,Dhaka</span>
                <i className="fas fa-caret-down"></i>
              </div>
              {/* 4th row */}
              <div
                style={{
                  marginTop: top,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button class="btn btn-success" text="Check out" />
                <span>Break</span>
                <Switch />
              </div>
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">
              {/* $40,000 */}
            </div>
          </div>
          <div className="col-auto">
            {/* <i className="fas fa-calendar fa-2x text-gray-300"></i> */}
          </div>
        </div>
      </div>
    </div>
  );
}
