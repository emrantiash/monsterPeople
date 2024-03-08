"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setbreadcrumb } from "../redux/slices/breadcrumbSlice";
import { getActive, setThisIndex } from "../redux/slices/salaryComponentSlice";
import Button from "../components/button/Button";
import userImage from "../assets/img/myinfo/user.svg";

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
    <>
      <div className="card text-left" style={{ marginTop: -10 }}>
        <div className="row">
          <div className="col-md-2 " style={{ margin: 0, padding: 0 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#37B5A7",
                  height: 163,
                  width: "100%",
                  marginLeft : 10,
                }}
              >
                <Image
                  //  className="img-fluid"
                  src={userImage}
                  style={{
                    height: "180",
                    width: "180",

                    border: "1px solid gray",
                    borderRadius: 8,
                    marginTop: 20,
                    // objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div
              className="card-body"
              style={{
                marginTop: 60,

                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center",
                // backgroundColor: "#F9F9FA",
                position: "sticky",
              }}
            >
              <div
                style={{
                  // backgroundColor : 'red',
                  width: "50%",
                  display: "flex",
                  flexDirection: "row",
                justifyContent: "space-around",
                alignItems : 'center'
                }}
              >
                <i className="fas fa-chart-bar"></i>
                &nbsp;
                <div className="text-md">xx-xxxxxx</div>
              </div>
            </div>
          </div>
          <div className="col-md-10" style={{ margin: 0, padding: 0 }}>
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
    </>
  );
}
