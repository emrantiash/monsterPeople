"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Select from "@/app/components/select/Select";
import Table from "@/app/components/table/Table";
import styles from "./page.style";

const thead = [
  {
    id: 1,
    name: "Payslip",
  },
  {
    id: 2,
    name: "Amount",
  },
];

const tbody = [
  {
    id:1,
    title: "Basic",
    value: 60000,
  },
  {
    id:2,
    title: "House Rent",
    value: 40000,
  },
  {
    id:3,
    title: "Medical",
    value: 10000,
  },
  {
    id:4,
    title: "Conveyance",
    value: 3500,
  },
  {
    id:5,
    title: "Total Gross",
    value: 113500,
    // background : true
  },
  {
    id:6,
    title: "Addition",
    value: 8000,
  },
  {
    id:7,
    title: "Deduction",
    value: 4000,
  },
  {
    id:8,
    title: "Tax",
    value: 4000,
  },
  {
    id:9,
    title: "Net Pay",
    value: 97500,
  },
];

export default function Page() {
  return (
    <div>
      <div className="row">
        <div className="col-5">
          <div className="card border-left shadow h-100 py-2">
            <div className="card-body">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Select placement name text="Month" />
                &nbsp;
                <Select placement name text="Year" />
              </div>

              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold  text-capitalize mb-1">
                    <div
                      className="row"
                      style={{
                        marginTop: 20,
                      }}
                    >
                      <div className="col-md-12">
                        <Table thead={thead} tbody={tbody} />
                      </div>
                    </div>
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
                </div>
                <div className="col-auto"></div>
              </div>
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "flex-end",
                    }}
                  >
                    <Button class="btn btn-primary" text="Print" />
                    <Button class="btn btn-success" text="View" />
                    <Button class="btn btn-secondary" text="Download" />
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
