import React from "react";
import Button from "../button/Button";
import Switch from "../switch/Switch";

const top = 20;
const normal = { fontWeight: "normal", color: "#000" };

const events = [
  {
    id: 1,
    name: "Hal Jordan",
    deparment: "HR",
    event: "Birthday",
    days: "2 ",
  },
  {
    id: 2,
    name: "HR Training",
    deparment: "HR",
    event: "Birthday",
    days: "2 ",
  },
  {
    id: 3,
    name: "Compant Retreat",
    deparment: "HR",
    event: "Birthday",
    days: "2",
  },
];

export default function Event() {
  return (
    <div
      className="card shadow h-100 "
      style={
        {
          // backgroundColor: "red",
          // display: "flex",
          // justifyContent: "space-between",
        }
      }
    >
      <div className="card-body" style={{ backgroundColor: "" }}>
        <div className="row no-gutters align-items-center" style={{}}>
          <div
            className="col mr-2"
          
          >
            <div className="text-xs font-weight-normal   ">
              <div
                style={{
                  margin: 5,
                  padding: 5,
                  marginTrim : 30 ,
                  display : 'flex',
                  justifyContent : 'space-between'
                }}
              >
                <span className="text-lg">Events  </span>
                <span style={{color:'#e4d8d8'}}><i className="fas fa-calendar fa-2x" ></i></span>
              </div>
              <div style={{ 
                // backgroundColor : 'red',
                marginTop: 10 ,           
              marginInlineStart : 30 ,
              marginRight : 30 ,
              display :'flex',
              justifyContent : 'center',
              flexDirection : 'column',
              // alignItems : "unset",
              
              }}>
                {events.map((data, index) => (
                  <div
                    key={index}
                    className="card-body shadow"
                    style={{ display: "flex", flexDirection: "column" ,backgroundColor : '',justifyContent :''}}
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
                        <span>{data.name}</span>
                        <span>{data.deparment}</span>
                        <span>
                          {data.event} . in {data.days} days{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
