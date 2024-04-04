import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.style";
import {
  changeEmployeeRoll,
  getDesignationList,
} from "@/app/redux/slices/employeeSlice";
import { getDivision, getDepartment } from "@/app/redux/slices/divisionSlices";
import {
  getWorkLocation,
} from "@/app/redux/slices/basicSlices";
import { getEmploymentType } from "@/app/redux/slices/employementSlice";
import { postEmployeeJobDetails } from "@/app/redux/slices/employeeSlice";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);
  const [designation, setDesignation] = useState([]);
  const [employeeType, setEmployeeType] = useState([]);
  const [workLocation, setWorkLocation] = useState([]);
  const data = useSelector((state) => state.divisionReducer.data);
  const [selectedType, setSelectedType] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(0);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedWorkLocation, setSelectedWorkLocation] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState("");
  const thisEmployeeName = useSelector(
    (state) => state.employeeReducer.thisEmployeeName
  );
  const thisEmployeeID = useSelector((state) => state.employeeReducer.thisEmployeeId);
  const division = useSelector((state) => state.divisionReducer.division);
  const department = useSelector((state) =>state.divisionReducer.department && state.divisionReducer.department);
  const tail = "isActiveOnly=true"

  const [userField, setUserField] = useState({
    employeeCode: "",
    dateOfJoining: "",
    confirmationDate: "",
  });

  

  useEffect(() => {
    dispatch(getDivision());
    dispatch(getEmploymentType(tail)).then(function (e) {
      e.payload && e.payload.success
        ? setEmployeeType(e.payload.payload[0])
        : setEmployeeType([]);
    });
    dispatch(getWorkLocation()).then(function (e) {
      e.payload && e.payload.success
        ? setWorkLocation(e.payload.payload[0])
        : setWorkLocation([]);
    });
    dispatch(getDesignationList()).then(function (e) {
      e.payload && e.payload.success
        ? setDesignation(e.payload.payload[0])
        : setDesignation([]);
    });
  }, [dispatch]);

  const _getEmployeeType = (e) => {
    setSelectedType(e.target.value);
  };

  const changeUserFieldHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  const _getDepartmentName = (e) => {
    setSelectedDivision(e.target.value);
    dispatch(getDepartment(e.target.value));
  };

  const _saveDepartment = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const _saveWorkLocation = (e) => {
    setSelectedWorkLocation(e.target.value);
  };

  const _saveDesignation = (e) => {
    setSelectedDesignation(e.target.value);
  };

  const _submit = () => {
    setIsSubmit(true);
    const isEmpty =
      thisEmployeeID == "" ||
      userField.employeeCode == "" ||
      userField.dateOfJoining == "" ||
      userField.confirmationDate == "" ||
      selectedDivision == "" ||
      selectedDepartment == "" ||
      selectedDesignation == "" ||
      selectedType == "" ||
      selectedWorkLocation == "";
    console.log(isEmpty);
    if (!isEmpty) {
      let options = {
        employeeId: parseInt(thisEmployeeID),
        employeeCode: userField.employeeCode,
        dateOfJoining: userField.dateOfJoining,
        confirmationDate: userField.confirmationDate,
        divisionId: parseInt(selectedDivision),
        departmentId: parseInt(selectedDepartment),
        designationId: parseInt(selectedDesignation),
        employmentTypeId: parseInt(selectedType),
        workLocationId: parseInt(selectedWorkLocation),
      };
      console.log(options);

      dispatch(postEmployeeJobDetails(options)).then(function (e) {
        e.payload &&
          e.payload.success &&
          dispatch(changeEmployeeRoll([1, true]));
      });
    }
  };
  return (
    <div>
      <div className="row" style={styles.bobyInnerRow}>
        <div className="col-md-3" style={{ backgroundColor: "" }}></div>
        <div className="col-md-8" style={{ backgroundColor: "" }}>
          <div className="row">
            <div className="col-12" style={{ backgroundColor: "" }}>
              <div
                className="text-table font-weight-normal"
                style={{
                  color: "green",
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ color: "orange" }}>
                  <i className="fas fa-user"></i>
                </div>{" "}
                &nbsp; {thisEmployeeName}
              </div>
            </div>
          </div>
          <div className="row" style={styles.bobyInnerRow}>
            <div className="col-md-4">
              <Label title="Employee ID" />
              <Input
                error={isSubmit && userField.employeeCode == ""}
                placeholder="Employee ID"
                name="employeeCode"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div className="col-md-4">
              <Label title="Employee Type" />
              <Select
                error={isSubmit && selectedType == ""}
                placement
                data={employeeType}
                onchange={_getEmployeeType}
              />
            </div>
          </div>
          <div className="row" style={styles.bobyInnerRow}>
            <div className="col-md-4">
              <Label title="Date Of Joining" />
              <Input
                error={isSubmit && userField.dateOfJoining == ""}
                type="date"
                placeholder="dateOfJoining"
                name="dateOfJoining"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div className="col-md-4">
              <Label title="Confirmation Date" />
              <Input
                error={isSubmit && userField.confirmationDate == ""}
                type="date"
                placeholder="confirmationDate"
                name="confirmationDate"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
          <div className="row" style={styles.bobyInnerRow}>
            <div className="col-md-4">
              <Label title="Division" />
              <Select
                error={isSubmit && selectedDivision == ""}
                placement
                data={division}
                onchange={_getDepartmentName}
              />
            </div>
            <div className="col-md-4">
              <Label title="Department" />
              <Select
                error={isSubmit && selectedDepartment == ""}
                placement
                data={selectedDivision != 0 && department[0].departmentList}
                onchange={_saveDepartment}
              />
            </div>
          </div>
          <div className="row" style={styles.bobyInnerRow}>
            <div className="col-md-4">
              <Label title="Work Location" />
              <Select
                error={isSubmit && selectedWorkLocation == ""}
                placement
                data={workLocation}
                onchange={_saveWorkLocation}
              />
            </div>
            {/* <div className="col-md-4">
              <Label title="Contract Type" />
              <Select placement  />
            </div> */}
            <div className="col-md-4">
              <Label title="Designation" />
              <Select
                error={isSubmit && selectedDesignation == ""}
                placement
                data={designation}
                onchange={_saveDesignation}
              />
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
                onclick={() => window.location.href = '/people'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
