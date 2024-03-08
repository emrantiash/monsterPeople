import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.style";
import {
  changeEmployeeRoll,
  getDesignationList,
} from "@/app/redux/slices/employeeSlice";
import { getDivision, getDepartment } from "@/app/redux/slices/divisionSlices";
import Label from "@/app/components/label/Label";
import Input from "@/app/components/input/Input";
import Select from "@/app/components/select/Select";
import Textarea from "@/app/components/textarea/Textarea";
import Button from "@/app/components/button/Button";
const gender = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
];
const marital_status = [
  {
    id: 1,
    name: "Maried",
  },
  {
    id: 2,
    name: "Unmaried",
  },
];

const _mark = false;
const black = true;

export default function JobDetails() {
  const dispatch = useDispatch();
  const [designation, setDesignation] = useState([]);
  const data = useSelector((state) => state.divisionReducer.data);
  const [selectedDivision,setSelectedDivision] = useState(0)
  const division = useSelector((state) => state.divisionReducer.division);
  const department = useSelector(
    (state) => state.divisionReducer.department[0].departmentList
  );


  useEffect(() => {
    dispatch(getDivision());
    dispatch(getDesignationList()).then(function (e) {
      e.payload && e.payload.success
        ? setDesignation(e.payload.payload[0])
        : setDesignation([]);
    });
  }, [dispatch]);

  const _getDepartmentName = (e) => {
    console.log(e.target.value);
    setSelectedDivision(e.target.value)
    dispatch(getDepartment(e.target.value));
  };

  const _saveDepartment =(e) =>{
    console.log(e.target.value)
  }

  const _submit = () => {
    dispatch(changeEmployeeRoll([1, true]));
  };
  return (
    <div>
      <div className="row" style={styles.bobyInnerRow}>
        <div className="col-md-3" style={{ backgroundColor: "" }}></div>
        <div className="col-md-8" style={{ backgroundColor: "" }}>
          <div className="row" style={styles.bobyInnerRow}>
            <div className="col-md-4">
              <Label title="Employee ID" />
              <Input placeholder="Employee ID" />
            </div>
            <div className="col-md-4">
              <Label title="Employee Type" />
              <Select placement />
            </div>
          </div>
          <div className="row" style={styles.bobyInnerRow}>
            <div className="col-md-4">
              <Label title="Date Of Joining" />
              <Input type="date" placeholder="First name" />
            </div>
            <div className="col-md-4">
              <Label title="Confirmation Date" />
              <Input type="date" placeholder="First name" />
            </div>
          </div>
          <div className="row" style={styles.bobyInnerRow}>
            <div className="col-md-4">
              <Label title="Division" />
              <Select placement data={division} onchange={_getDepartmentName} />
            </div>
            <div className="col-md-4">
              <Label title="Department" />
              <Select placement data={department} onchange={_saveDepartment} />
            </div>
          </div>
          <div className="row" style={styles.bobyInnerRow}>
            <div className="col-md-4">
              <Label title="Work Location" />
              <Select placement />
            </div>
            {/* <div className="col-md-4">
              <Label title="Contract Type" />
              <Select placement  />
            </div> */}
            <div className="col-md-4">
              <Label title="Designation" />
              <Select placement data={designation} />
            </div>
          </div>
          <div className="row" style={styles.bobyInnerRow}>
            <div className="col-md-12" style={styles.buttonGroup}>
              <Button
                class="btn btn-success btn-lg text-table"
                text="Save and Continue"
                onclick={_submit}
              />{" "}
              &nbsp;
              <Button
                class="btn btn-outline-success btn-lg text-table"
                text="Cancel"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
