"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setbreadcrumb } from "../redux/slices/breadcrumbSlice";
import { getActive, setThisIndex } from "../redux/slices/salaryComponentSlice";
import Button from "../components/button/Button";
import Leftpanel from "./leftpanel";


const _color = "#37B5A7";
const active = "nav-link active"

export default function MyinfoLayout({ children }) {
  const dispatch = useDispatch();
  // const { active, index } = useSelector((state) => state.salaryComponentReducer);
  const [index,setIndex] = useState(0)

  useEffect(() => {
    // dispatch(getActive());
    dispatch(setbreadcrumb(["My-Info"]));
  }, [dispatch]);

  const setMyIndex = (val) => {
    console.log(val);
    // dispatch(setThisIndex(val));
    setIndex(val)
  };
  return (
    <div style={{ marginTop: -10 }}>
      <div className="card ">
        <div className="row" style={{}}>
          <div
            className="col-2"
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
                <Leftpanel />
                {/*  */}
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
