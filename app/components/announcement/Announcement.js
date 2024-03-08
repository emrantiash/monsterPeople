import React from "react";
import Button from "../button/Button";
import Switch from "../switch/Switch";

const top = 20;
const normal = { fontWeight: "normal", color: "#000" };

const events = [
  {
    id: 1,
    from: "Hal Jordan",
    msg: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
  },
  {
    id: 2,
    from: "HR Training",
    msg: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
  },
  {
    id: 3,
    from: "HR Training",
    msg: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
  },
];

export default function Announcement() {
  return (
    <div
      className="card shadow h-100 "
      style={{
        backgroundColor: "",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="card-body" style={{ backgroundColor: "" }}>
        <div
          className="row no-gutters align-items-center"
          style={{ backgroundColor: "" }}
        >
          <div className="col mr-2" style={{ backgroundColor: "" }}>
            <div className="text-xs font-weight-normal  ">
              <div
                style={{
                  margin: 5,
                  padding: 5,
                }}
              >
                <span className="text-lg">Announcement</span>
              </div>
              <div style={{ 
                 marginTop: 10 ,           
                 marginInlineStart : 30 ,
                 marginRight : 30 ,
                 display :'flex',
                 justifyContent : 'center',
                 flexDirection : 'column',
               }}>
                {events.map((data,index) => (
                  <div
                  key ={index}
                    className="card-body shadow"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <i
                        className="fas fa-user fa-2x text-gray-300"
                        style={{ marginRight: 10 }}
                      ></i>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span>{data.from}</span>
                        <span>{data.msg.substring(1, 40)}...</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <i className="fas fa-arrow-right fa-2x text-red-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
