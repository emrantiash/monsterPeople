"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.style";
import _templates from "../assets/img/setting/Empty_salary_template.svg";
import Button from "@/app/components/button/Button";


const length = false;


export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(setbreadcrumb(["Setting", "Salary Template"]));
  }, [dispatch]);

  const _submit = () => {
    console.log("comesss")
    router.push("/setting/salary-templates/new", { scroll: false });
    
  };
  return (
    <div>
      {length ? (
        <div className="" style={styles.NoLengthContainer}>
          <Image src={_templates} alt="_template" />
          <div style={styles.innerBox}>
            <div className="text-md font-weight-bold">
              You haven’t created any salary templates yet.
            </div>
            <div className="text-md">
              Create Salary templates for commonly used salary structures and
              assign them to employees
            </div>
            <Button
              class="btn btn-success text-md"
              text="Create Salary Template"
              onclick ={_submit}
            />
          </div>
        </div>
      ) : (
        <div style={styles.container}>
          <div style={styles.headerBox}>
            <div className="text-md font-weight-bold"></div>
            <div className="text-md">
              <Button class="btn btn-success text-md" text="Create New" onclick={_submit} />
            </div>
          </div>

          <div style={styles.tableRoot}>
          <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Template List</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td>$170,750</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
          </div>
        </div>
      )}
    </div>
  );
}
