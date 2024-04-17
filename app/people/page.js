"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployee,
  changeEditStatus,
  getAllEmployee,
  changeEmployeeRoll,
  storeThisEmoployeeId,
} from "../redux/slices/employeeSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setbreadcrumb } from "../redux/slices/breadcrumbSlice";
import Button from "../components/button/Button";
import peopleImage from "../assets/img/people/Frame.svg";
import styles from "./people.style";

const _maxValue = 3; // it will come from db

const people = [
  {
    id: 1,
    info: "Shihab Shariar Bin Shahbuddin",
    designation: "Senior Solution Architect",
    department: "Technology",
    email: "shihab@gmail.com",
    mobile: "01783458583",
    division: "Monstar Lab LLC",
    location: "New York",
    reportingto: "Adeeb Ahmed Chowdhury",
    stage: 0,
  },
  {
    id: 2,
    info: "Bini Amin",
    designation: "Senior Solution Architect",
    department: "Technology",
    email: "shihab@gmail.com",
    mobile: "01983458583",
    division: "Monstar Lab LLC",
    location: "New York",
    reportingto: "Adeeb Ahmed Chowdhury",
    stage: 2,
  },
  {
    id: 3,
    info: "Mohabum Hossain",
    designation: "Senior Solution Architect",
    department: "Technology",
    email: "shihab@gmail.com",
    mobile: "01383458583",
    division: "Monstar Lab LLC",
    location: "Bangladesh",
    reportingto: "Adeeb Ahmed Chowdhury",
    stage: 4,
  },
];

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [tail, setTail] = useState("");
  const [dataset, setDataset] = useState([]);
  const [length, setLength] = useState(0);

  const employee = useSelector((state) => state.employeeReducer.data);

  useEffect(() => {
    dispatch(setbreadcrumb(["People", "Employee List "]));

    dispatch(getAllEmployee());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getEmployee()).then(function (e) {
      e.payload && e.payload.success && setDataset(e.payload.payload[0]);
      setLength(e.payload && e.payload.payload[0].length);
    });
  }, [dispatch]);

  const addEmployee = () => {
    dispatch(setbreadcrumb(["People", "Add People"]));
    router.push("/people/add", { scroll: false });
  };

  const _keepStageInfo = (stage, id, name) => {
    console.log(stage);

    dispatch(storeThisEmoployeeId([id, name]));

    let i;
    let j;
    for (i = 0; i <= stage - 1; i++) {
      console.log(i);
      dispatch(changeEmployeeRoll([i, true]));
    }
    let ii;
    for (ii = stage; ii <= 4; ii++) {
      console.log(ii);
      dispatch(changeEmployeeRoll([ii, false]));
    }

    switchEditStatus(true);
  };
  function switchEditStatus(_val) {
    dispatch(changeEditStatus(_val));
  }

  return (
    <main>
      <div className="container-fluid">
        {/* {
          length == 0 ?
          <div style={styles.container}>
          <div className="text-xs" style={styles.textMargin}>No Employee Found</div>
        <Image src={peopleImage} alt="peopleImage" />
        <div style={styles.innerBox}>
          <Button className="btn btn-outline-success" text = "Add Employee" onclick={addEmployee} 
          icon={<i className="fas fa-plus"></i>}
          />
          &nbsp;
          <Button className="btn btn-success" text = "Upload CSV"/>
        </div>

        </div> : */}
        <div>
          <div className="row">
            <div className="col-md-9"></div>
            <div className="col-sm-3">
              <div style={styles.btnGroup}>
                <Link href="people/add">
                  <Button
                    class="btn btn-success text-table"
                    text="Add Employee"
                    onclick={(e) => switchEditStatus(false)}
                    icon={<i className="fas fa-plus"></i>}
                  />
                </Link>
                &nbsp;
                <Button
                  class="btn btn-outline-success text-table"
                  text="Upload CSV"
                  icon={<i className="fas fa-arrow-up"></i>}
                />
              </div>
            </div>
          </div>

          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-2 text-gray-800"></h1>
            <p className="mb-4">
              {/* DataTables is a third party plugin that is used to generate the
              demo table below. For more information about DataTables, please
              visit the{" "} */}
              {/* <a target="_blank" href="https://datatables.net">
                official DataTables documentation
              </a> */}
              .
            </p>

            {/* <!-- DataTales Example --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Employee Table
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  {
                    // Array.isArray(dataset) && dataset.length > 0 &&

                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead>
                        <tr className="text-table">
                          <th>Sl.</th>
                          <th>Emp#</th>
                          <th>Emp Information</th>
                          <th>Contact</th>
                          <th>Division</th>
                          <th>Location</th>
                          <th>Reporting to</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {/* <tfoot>
                      <tr>
                      <th>Sl.</th>
                        <th>Emp#</th>
                        <th>Emp Information</th>
                        <th>Contact</th>
                        <th>Division</th>
                        <th>Location</th>
                        <th>Reporting to</th>
                        <th>Action</th>
                      </tr>
                    </tfoot> */}
                      <tbody>
                        {Array.isArray(employee) &&
                          employee.map((data, index) => (
                            <tr className="text-table" key={index}>
                              <td>{index + 1}</td>
                              <td>{data.employeeCode}</td>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column"
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column"
                                    }}
                                  >
                                    <div className="font-weight-bold text-primary">
                                      {data.fullName}
                                    </div>
                                    <div>{data.designation}</div>
                                    <div>{data.department}</div>
                                  </div>
                                  {data.stage < _maxValue && (
                                    <Link
                                      href="/people/add"
                                      onClick={() =>
                                        _keepStageInfo(
                                          data.stage,
                                          data.employeeId,
                                          data.fullName
                                        )
                                      }
                                    >
                                      <div className="progress">
                                        <div
                                          className="progress-bar progress-bar-striped bg-success"
                                          role="progressbar"
                                          style= {{width: (Math.round(data.stage*100/_maxValue)) +"%" }}
                                          aria-valuenow="25"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        >
                                          {Math.round(data.stage*100/_maxValue)}%
                                        </div>
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              </td>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                ></div>

                                <div>{data.workEmail}</div>
                                <div>{data.workContact}</div>
                              </td>
                              <td>{data.division}</td>
                              <td>{data.location}</td>
                              <td>{data.reportingTo}</td>
                              <td
                                style={{
                                  alignItems: "center",
                                  cursor: "pointer",
                                }}
                              >
                                <i className="fas fa-ellipsis-h"></i>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* } */}
      </div>
    </main>
  );
}
