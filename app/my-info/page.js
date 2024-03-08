"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setbreadcrumb } from "../redux/slices/breadcrumbSlice";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import userImage from "../assets/img/myinfo/user.svg";
import Table from "../components/table/Table";
import styles from "./layout.style";
import AddNew from "../components/addnew/AddNew";

const thead = [
  {
    id: 0,
    name: "SL",
  },
  {
    id: 1,
    name: "Effective Date ",
  },
  {
    id: 2,
    name: "Account Name",
  },
  {
    id: 3,
    name: "Account Number(IBAN)",
  },
  {
    id: 4,
    name: "Bank Name",
  },
  {
    id: 5,
    name: "Swift Code",
  },
  {
    id: 6,
    name: "Routing Number",
  },
  {
    id: 7,
    name: "Comment",
  },
];

const tbody = [
  {
    id: 1,
    edate: "xx-xx-xxxx",
    name: "Md. Sayemur Rahman",
    ac: "xxxxxxxxxxx",
    bank: "Standard Chartered",
    swift: "xxxxxxxx",
    rnumber: "xxxxxxxx",
    Comment: "",
  },
  {
    id: 2,
    edate: "xx-xx-xxxx",
    name: "Md. Sayemur Rahman",
    ac: "xxxxxxxxxxx",
    bank: "Bank Asia",
    swift: "xxxxxxxx",
    rnumber: "xxxxxxxx",
    Comment: "",
  },
];

export default function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setbreadcrumb(["My Info"]));
  }, [dispatch]);

  return (
    <div>
      {/* <div className="jumbotron" style={{zIndex:-1,backgroundColor : 'green'}}> </div> */}
      <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Name</div>
        <div className="col-1"></div>
        <div className="col-2 text-table">Sayemur Rahman</div>
      </div>
      <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Date Of Birth</div>
        <div className="col-1"></div>
        <div className="col-2 text-table">15 Sept.1992</div>
      </div>
      <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Gender</div>
        <div className="col-1"></div>
        <div className="col-2 text-table">Male</div>
      </div>
      <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Marital Status</div>
        <div className="col-1"></div>
        <div className="col-2 text-table">Married</div>
      </div>
      <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Nid</div>
        <div className="col-1"></div>
        <div className="col-2 text-table">20989808767656</div>
      </div>
      <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Ethnicity</div>
        <div className="col-1"></div>
        <div className="col-2 text-table">Bangladeshi</div>
      </div>

      <div className="row">
        <div className="col-10">
          <hr />
        </div>
      </div>

      <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Address</div>
        <div className="col-1"></div>
        <div className="col-4 text-table">
          61, Kamal Ataturk Road, Banani, Dhaka 1212 . {"\n"}
          <div>(Permanent)</div>
          <div>61, Kamal Ataturk Road, Banani, Dhaka 1212.</div>
          <div>(Current)</div>
        </div>
      </div>
      <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Contact Number</div>
        <div className="col-1"></div>
        <div className="col-4 text-table">
          01768778765
          <div>(Personal)</div>
          <div>01897887676</div>
          <div>(Current)</div>
        </div>
      </div>
      <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Email</div>
        <div className="col-1"></div>
        <div className="col-4 text-table">
          sakin@gmail.com
          <div>(Personal)</div>
          <div>sakib2@gmail.com</div>
          <div>(Current)</div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-10">
          <div className="text-table">
            <i className="fas fa-home"></i> &nbsp;Bank Details
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-10">
          <Table thead={thead} tbody={tbody} />
         <AddNew href="" />
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <hr />
        </div>
      </div>
    </div>
  );
}
