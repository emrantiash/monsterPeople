"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setbreadcrumb } from "../redux/slices/breadcrumbSlice";
import { getActive, setThisIndex } from "../redux/slices/salaryComponentSlice";
import Button from "../components/button/Button";
import userImage from "../assets/img/myinfo/user.svg";
import styles from "./layout.style";

const _color = "#37B5A7";

export default function MyinfoLayout({ children }) {
  const dispatch = useDispatch();
  const { active, index } = useSelector(
    (state) => state.salaryComponentReducer
  );

  useEffect(() => {
    dispatch(getActive());
    dispatch(setbreadcrumb(["My-Info"]));
  }, [dispatch]);

  const setMyIndex = (val) => {
    console.log(val);
    dispatch(setThisIndex(val));
  };
  return (
    <div style={{ marginTop: -10 }}>
      <div className="card ">
        <div className="row" style={{}}>
          <div
            className="col-2 "
            style={{
              backgroundColor: "#37B5A7",
              height: 163,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="row">
              <div className="col-1"></div>
              <div
                className="col-10"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    //  height: 800,
                    // width : 'auto',
                  backgroundColor: "#f8f8f8",
                    // backgroundColor : '#37B5A7',
                    marginTop: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius : 8,
                  }}
                >
                  <div style={{ backgroundColor: "" }}>
                    <Image
                      src={userImage}
                      height={"100%"}
                      width={150}
                      style={{
                        backgroundColor: "",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        borderRadius : 150/2,
                      }}
                    />
                  </div>
                  {/* left columnn text */}
                  <div className="" style={styles.sideDivRoot}>
                    <div style={styles.sideDiv}>
                      <i className="fas fa-home"></i>
                      &nbsp;
                      <div className="text-xs">xx-xxxxxxx</div>
                    </div>
                    <div style={styles.sideDiv}>
                      <i className="fas fa-home"></i>
                      &nbsp;
                      <div className="text-xs">xx-xxxxxxx</div>
                    </div>
                    <div style={styles.sideDiv}>
                      <i className="fas fa-home"></i>
                      &nbsp;
                      <div className="text-xs">xx-xxxxxxx</div>
                    </div>
                    <hr />
                    <div style={{}}>
                      <div className="text-xs">Hire Date</div>
                      <div className="text-xs">23 Sept,2010</div>
                      <div className="text-xs">10 years</div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="col-1"></div>
            </div>
          </div>

          <div className="col-10 " style={{ margin: 0, padding: 0 }}>
            <div
              className="card-header"
              style={{ backgroundColor: "#37B5A7", borderRadius: 0 }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",

                  height: 100,
                  marginTop: 10,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    className="text-lg"
                    style={{ color: "white", letterSpacing: 0.5 }}
                  >
                    Sayemur Rahman{" "}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "white", letterSpacing: 0.5 }}
                  >
                    Senior Solution Architect, Tech{" "}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "white", letterSpacing: 0.5 }}
                  >
                    Monstarlab LLC, New York
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button class="btn btn-outline-light" text="Add / Change" />
                  &nbsp;
                  <Button class="btn btn-outline-light" text="...." />
                </div>
              </div>
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <Link
                    style={{ color: index == 0 ? "#37B5A7" : "#fff" }}
                    className={index == 0 ? active : "nav-link"}
                    href="/my-info"
                    onClick={() => setMyIndex(0)}
                  >
                    Personal
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: index == 1 ? "#37B5A7" : "#fff" }}
                    className={index == 1 ? active : "nav-link"}
                    href="/my-info/job-details"
                    onClick={() => setMyIndex(1)}
                  >
                    Job Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: index == 2 ? "#37B5A7" : "#fff" }}
                    className={index == 2 ? active : "nav-link"}
                    href="/my-info/pay-slip"
                    onClick={() => setMyIndex(2)}
                  >
                    PaySlip
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
