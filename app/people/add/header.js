"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.style";
import Image from "next/image";
import lineImage from "../../assets/img/people/Line.png";

const _mark = false;
const black = true;

export default function Header() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.employeeReducer.empStatus);

 console.log(status);
  return (
    <div
      style={styles.containerHeader}
      className="wow fadeInUp"
      data-wow-delay=".2s"
    >
      <div style={styles.headerWrapper}>
        <div style={styles.numberBox}>
          <div style={{ ...styles.circle, borderColor: Array.isArray(status) &&  status[0] && "green" }}>
            {Array.isArray(status) &&  !status[0] ? (
              1
            ) : (
              <span style={{ color: "green" }}>
                <i className="fas fa-check text-blue-300"></i>
              </span>
            )}
          </div>

          <div>
            <Image alt="line" src={lineImage} />
          </div>
          <div style={{ ...styles.circle, borderColor: Array.isArray(status) && status[1] && "green" }}>
            {Array.isArray(status) && status[1] ? (
              <span style={{ color: "green" }}>
                <i className="fas fa-check text-blue-300"></i>
              </span>
            ) : (
              2
            )}
          </div>
          <div>
            <Image alt="line" src={lineImage} />
          </div>
          <div style={{ ...styles.circle, borderColor: Array.isArray(status) && status[2] && "green" }}>
          {
            Array.isArray(status) && status[2] ? 
            <span style={{ color: "green" }}>
            <i className="fas fa-check text-blue-300"></i>
          </span> :
          3
          }
            </div>
          <div>
            <Image alt="line" src={lineImage} />
          </div>
          <div style={{ ...styles.circle, borderColor: Array.isArray(status) && status[3] && "green" }}>
          {
            Array.isArray(status) && status[3] ? 
            <span style={{ color: "green" }}>
            <i className="fas fa-check text-blue-300"></i>
          </span> :
          4
          }
          </div>
          <div>
            <Image alt="line" src={lineImage} />
          </div>
          <div style={styles.circle}>5</div>
        </div>

        <div style={styles.numberBoxNext}>
          <div
            className="text-xs"
            style={{
              color: Array.isArray(status) && !status[0] ? "black" : "gray",
              fontWeight: Array.isArray(status) && !status[0] && "bold",
            }}
          >
           <div style={{marginLeft:2}}>Basic Info</div> 
          </div>
          <div
            className="text-xs"
            style={{
              color: Array.isArray(status) && status[0] && !status[1] ? "black" : "gray",
              marginLeft: 40,
              fontWeight: Array.isArray(status) && status[0] && !status[1] && "bold",
            }}
          >
            Job details
          </div>
          <div
            className="text-xs"
            style={{
              color: Array.isArray(status) && status[0] && status[1] && !status[2] ? "black" : "gray",
              marginLeft: 20,
              fontWeight:Array.isArray(status) && status[0] && status[1] && !status[2] && "bold",
            }}
          >
            Documents
          </div>
          <div
            className="text-xs"
            style={{
              color:
              Array.isArray(status) && status[0] && status[1] && status[2] && !status[3]
                  ? "black"
                  : "gray",
              marginLeft: 25,
              fontWeight:
              Array.isArray(status) && status[0] && status[1] && status[2] && !status[3] && "bold",
            }}
          >
            Payment Info
          </div>
          <div
            className="text-xs"
            style={{
              color:
              Array.isArray(status) && status[0] && status[1] && status[2] && status[3] && status[4]
                  ? "black"
                  : "gray",
              marginLeft: 15,
              fontWeight:
              Array.isArray(status) &&  status[0] &&
              Array.isArray(status) &&  status[1] &&
              Array.isArray(status) &&  status[2] &&
              Array.isArray(status) &&  status[3] &&
              Array.isArray(status) &&  !status[4] &&
                "bold",
            }}
          >
            {/* Documents */}
            Salary Info
          </div>
        </div>
      </div>
    </div>
  );
}
