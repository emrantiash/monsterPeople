"use client";
import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getEmployeeStaticInfo } from "@/app/redux/slices/employeeSlice";
import styles from "./page.style";
import Image from "next/image";
import lineImage from "../../assets/img/people/Line.png";
import Label from "@/app/components/label/Label";
import Input from "@/app/components/input/Input";
import Select from "@/app/components/select/Select";
import Textarea from "@/app/components/textarea/Textarea";
import Button from "@/app/components/button/Button";

const _roll = [false,false,false,false,false]

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

export default function page() {
    const dispatch = useDispatch()
    // const tail = "compId=10&subCompId=11&empType=Permanent"
    const [userField, setUserField] = useState({
		name: "",
		mobile: "",
		area: "",
		address: "",
		note: ""
	});
    
  const _getGender = () => {};
  const _getMaritalStatus = (e) => {};

  const _submit = () =>{

  }
  return (
    <div style={styles.container}>
      {/* <div style={styles.containerHeader} className="wow fadeInUp" data-wow-delay=".2s">
        <div style={styles.headerWrapper}>
          <div style={styles.numberBox}>
            <div style={{ ...styles.circle, borderColor: _mark && "green" }}> */}
              {/* 1 */}
              {/* <i className='fas fa-check' ></i> */}
            {/* </div>

            <div>
              <Image alt="line" src={lineImage} />
            </div>
            <div style={styles.circle}>2</div>
            <div>
              <Image alt="line" src={lineImage} />
            </div>
            <div style={styles.circle}>3</div>
            <div>
              <Image alt="line" src={lineImage} />
            </div>
            <div style={styles.circle}>4</div>
            <div>
              <Image alt="line" src={lineImage} />
            </div>
            <div style={styles.circle}>5</div>
          </div>

          <div style={styles.numberBoxNext}>
            <div
              className="text-xs"
              style={{ color: black ? "black" : "gray", fontWeight: "bold" }}
            >
              Basic Info
            </div>
            <div className="text-xs" style={{ color: "gray", marginLeft: 40 }}>
              Job details
            </div>
            <div className="text-xs" style={{ color: "gray", marginLeft: 20 }}>
              Salary Info
            </div>
            <div className="text-xs" style={{ color: "gray", marginLeft: 25 }}>
              Payment Info
            </div>
            <div className="text-xs" style={{ color: "gray", marginLeft: 15 }}>
              <div style={{}}> Documents</div>
            </div>
          </div>
        </div>
      </div> */}
      {/* body here  */}

      <div style={styles.body}>
        {/* basic info title */}
        <div className="row">
          <div className="col-md-2" style={{ backgroundColor: "" }}></div>
          <div className="col-md-2" style={{ backgroundColor: "" }}>
            <div
              className="text-md font-weight-bold"
              style={styles.bobyInnerRow}
            >
              Personal Details
            </div>
          </div>
        </div>
        {/* name */}
        <div className="row" style={styles.bobyInnerRow}>
          <div className="col-md-2" style={{ backgroundColor: "" }}></div>
          <div className="col-md-6" style={{ backgroundColor: "" }}>
            <Label title="Employee Name" />
            <div className="row">
              <div className="col-md-4">
                <Input placeholder="First name" />
              </div>
              <div className="col-md-4">
                <Input placeholder="Middle name" />
              </div>
              <div className="col-md-4">
                <Input placeholder="Last name" />
              </div>
            </div>
          </div>
        </div>
        {/* 2nd column */}
        <div className="row" style={styles.bobyInnerRow}>
          <div className="col-md-2" style={{ backgroundColor: "" }}></div>
          <div className="col-md-6" style={{ backgroundColor: "" }}>
            <div className="row">
              <div className="col-md-4">
                <Label title="Date Of Birth" />
                <Input type="date" placeholder="" />
              </div>
              <div className="col-md-4">
                <Label title="Gender" />
                <Select data={gender} onchange={_getGender} />
              </div>
              <div className="col-md-4">
                <Label title="Marital Status" />
                <Select data={marital_status} onchange={_getMaritalStatus} />
              </div>
            </div>
          </div>
        </div>
        {/* 3rd column */}
        <div className="row" style={styles.bobyInnerRow}>
          <div className="col-md-2" style={{ backgroundColor: "" }}></div>
          <div className="col-md-6" style={{ backgroundColor: "" }}>
            <div className="row">
              <div className="col-md-4">
                <Label title="Ethnicity" />
                <Select
                  placement
                  data={marital_status}
                  onchange={_getMaritalStatus}
                />
              </div>
              <div className="col-md-4">
                <Label title="NID" />
                <Input placeholder="nid" />
              </div>
            </div>
          </div>
        </div>
        {/* 2nd row */}
        <div className="row">
          <div className="col-md-2" style={{ backgroundColor: "" }}></div>
          <div className="col-md-2" style={{ backgroundColor: "" }}>
            <div
              className="text-md font-weight-bold"
              style={styles.bobyInnerRow}
            >
              Contact Details
            </div>
          </div>
        </div>
        <div className="row" style={styles.bobyInnerRow2}>
          <div className="col-md-2" style={{ backgroundColor: "" }}></div>
          <div className="col-md-6" style={{ backgroundColor: "" }}>
            <Label title="Address (Current)" />
            <Textarea />
          </div>
        </div>
        <div className="row" style={styles.bobyInnerRow5}>
          <div className="col-md-2" style={{ backgroundColor: "" }}></div>
          <div className="col-md-6" style={{ backgroundColor: "" }}>
            <Label title="Address (Permanent)" />
            <Textarea />
          </div>
        </div>
        <div className="row" style={styles.bobyInnerRow}>
          <div className="col-md-2" style={{ backgroundColor: "" }}></div>
          <div className="col-md-6">
            <div className="text-md ">Contact Number </div>

            <div className="row">
              <div className="col-md-6">
                <Label title="Personal" />
                <Input type="text" placeholder="" />
              </div>
              <div className="col-md-6">
                <Label title="Work" />
                <Input type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={styles.bobyInnerRow}>
          <div className="col-md-2" style={{ backgroundColor: "" }}></div>
          <div className="col-md-6">
            <div className="text-md">Email </div>

            <div className="row">
              <div className="col-md-6">
                <Label title="Personal" />
                <Input type="email" placeholder="" />
              </div>
              <div className="col-md-6">
                <Label title="Work" />
                <Input type="email" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={styles.bobyInnerRow}>
          <div className="col-md-2" style={{ backgroundColor: "" }}></div>
          <div className="col-md-6" style={{ backgroundColor: "" }}>
            <div className="form-check" style={{ marginTop: 10 }}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label text-md"
                htmlFor="flexCheckDefault"
              >
                Enable Protal Access
              </label>
              <div className="text-xs">
                The employee will be able to view payslips and social security
                benefit details through the employee portal.
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={styles.bobyInnerRow}>
          <div className="col-md-2" style={{ backgroundColor: "" }}></div>
          <div
            className="col-md-6"
            style={{ backgroundColor: "", marginTop: 10 }}
          >
            <div>
              <Label title="Statutory Details" />
              <div className="text-xs">
                Let us know the employee nationality to enable applicable
                statutory. &nbsp;
                <br />
                <div className="text-xs form-text">
                  {" "}
                  Is this employee a GCC National?
                </div>
              </div>
              <div style={styles.radioGroup} >
                <div style={styles.radioBranch} className="bg-muted">
                <div className="form-check" style={styles.radio}>
                  <input
                    className="form-check-input"
                    type="radio"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Yes
                  </label>
                </div>
                </div>
                &nbsp;
                <div style={styles.radioBranch}>
                <div className="form-check" style={{margin : 5,padding : 10}}>
                  <input
                    className="form-check-input"
                    type="radio"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    No
                  </label>
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop : 30}}>
            <div className="col-md-2"></div>
            <div className="col-md-4" style={styles.buttonGroup}>
            <Button class="btn btn-success btn-lg text-lg" text="Save and Continue"  onclick={_submit} /> &nbsp;
            <Button class="btn btn-outline-success btn-lg" text="Cancel" />
            
            </div>
            <div className="col-md-3">
           
            
            </div>
            <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}
