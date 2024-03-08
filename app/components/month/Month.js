import React from "react";
import Button from "../button/Button";
import commonStyle from "../style/Styles";

export default function Month() {
  return (
    <div className="card shadow h-100 ">
      <div className="card-body" style={{ backgroundColor: "" }}>
        <div
          className="row no-gutters align-items-center"
          style={{
            backgroundColor: "",
            marginTop: 10,
            marginInlineStart: 30,
            marginRight: 30,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="text-xs  text-uppercase mb-1"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div
            className="text-lg"
              style={{
                textTransform: "none",
              }}
            >
              February
            </div>
            <div
              style={{
                marginTop: 15,
                backgroundColor: "",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textTransform: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    color: commonStyle.color.basicColor,
                  }}
                >
                  137h 45min
                </span>
                <span style={{}}>Loggedin time</span>
              </div>
              <i className="fas fa-bell"></i>
            </div>

            <hr
              style={{ width: "100%", textAlign: "left", marginLeft: 0 }}
            ></hr>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textTransform: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    color: "#37B5A7",
                  }}
                >
                  20 Days
                </span>
                <span
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  Attendance
                </span>
              </div>

              <hr
                style={{ width: "100%", textAlign: "left", marginLeft: 0 }}
              ></hr>

              <div>
                <div
                  style={{
                    // backgroundColor : 'red',
                    display: "flex",
                    flexDirection: "column",
                    textTransform: "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: 20,
                      color: "#37B5A7",
                    }}
                  >
                    2 Days
                  </span>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "normal",
                        }}
                      >
                        Leave
                      </span>
                      {/* <i className="fas fa-plus fa-2x text-blue-300"></i> */}
                    </div>
                  </div>
                </div>

                {/* <hr
              style={{ width: "100%", textAlign: "left", marginLeft: 0 }}
            ></hr> */}
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: 20, marginTop: 20, marginRight: 20 }}>
          <Button class="btn btn-primary" text="Apply Leave" width={"100%"} />
        </div>
      </div>
    </div>
  );
}
