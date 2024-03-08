"use client"
import React ,{useEffect,useState} from "react";
import { changeEmployeeRoll } from "@/app/redux/slices/employeeSlice";
import { useDispatch,useSelector } from "react-redux";
import styles from "./page.style";
import Label from "@/app/components/label/Label";
import Select from "@/app/components/select/Select";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Table from "@/app/components/table/Table";

const thead = [
  {
    id: 1,
    name: "Salary Component",
  },
  {
    id: 2,
    name: "Calculation Type",
  },
  {
    id: 3,
    name: "Monthly Amount",
  },
  {
    id: 4,
    name: "Annual Amount",
  },
];
const tbody = [
  {
    SalaryComponent: "Basic",
    CalculationType: "Fixed Amount",
    MonthlyAmount: "100000",
    AnnualAmount: "1200000",
  },
  {
    SalaryComponent: "Housing Allowance",
    CalculationType: "Fixed Amount",
    MonthlyAmount: "0",
    AnnualAmount: "0",
  },
  {
    SalaryComponent: "Cost Of leaving Allowance",
    CalculationType: "Fixed Amount",
    MonthlyAmount: "0",
    AnnualAmount: "0",
  },
  {
    SalaryComponent: "Children Social Allowance",
    CalculationType: "Fixed Amount",
    MonthlyAmount: "0",
    AnnualAmount: "0",
  },
];

export default function SalaryInfo() {
  const dispatch = useDispatch()

    const _submit = () =>{
        dispatch(changeEmployeeRoll([2, true]));
    }
  return (
    <main>
      <div className="row" style={styles.bobyInnerRow}>
        <div className="col-md-1" style={{ backgroundColor: "" }}></div>
        <div className="col-md-10">
          <div
            className="card shadow h-100 "
            style={{
              backgroundColor: "",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <div
              className="card-body"
              style={{ backgroundColor: "", marginTop: 20 }}
            >
              <div className="row" style={styles.bobyInnerRow}>
                <div className="col-md-1"></div>
                <div className="col-md-2" style={styles.justifyLabel}>
                  <Label title="Salary Template" />
                </div>
                <div className="col-md-3" style={{ backgroundColor: "" }}>
                  <Select placement />
                </div>
              </div>
              <div className="row" style={styles.bobyInnerRow}>
                <div className="col-md-1"></div>
                <div className="col-md-2" style={styles.justifyLabel}>
                  <Label title="Effective Date" />
                </div>
                <div className="col-md-3" style={{ backgroundColor: "" }}>
                  <Input type="date" placeholder="date" />
                </div>
              </div>
              <div className="row" style={styles.bobyInnerRow}>
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <Table thead={thead} tbody={tbody} text="Earnings" />
                  <div
                    className="text-md font-weight-bold"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      height: 100,
                      backgroundColor: "#DDDFE9",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ marginLeft: 10, letterSpacing: 0.5 }}>
                      Total Gross Pay
                    </span>
                    <span></span>
                    <span style={{ letterSpacing: 0.5 }}>12000000</span>
                    <span style={{ marginRight: 10, letterSpacing: 0.5 }}>
                      1500000
                    </span>
                  </div>
                </div>
                {/* <div className="col-md-1"></div> */}
              </div>
              <div className="row" style={styles.bobyInnerRow}>
                <div className="col-md-1"></div>
                <div className="col-md-10" style={styles.salaryBoundary}>
                <div style={styles.boundaryScope}>
                  <div className="row" style={styles.bobyInnerRow}>
                   
                      <div className="col-md-2" style={styles.justifyLabel}>
                        <Label title="Component" />
                      </div>
                      <div className="col-md-3" style={{ backgroundColor: "" }}>
                        <Select placement />
                      </div>
                    
                  </div>
                  <hr />
                  </div>
                  <Table thead={thead} tbody={tbody}  />

                </div>
              </div>
              <div className="row" style={styles.bobyInnerRow}>
                <div className="col-md-1"></div>
              <div style={styles.buttonGroup}>
            <Button class="btn btn-success btn-lg text-md" text="Save and Continue"  onclick={_submit} /> &nbsp;
            <Button class="btn btn-outline-success btn-lg text-md" text="Cancel" />
            </div>
</div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </main>
  );
}
