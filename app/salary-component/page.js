"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch,useSelector } from "react-redux";
import { getActive ,setThisIndex } from "../redux/slices/salaryComponentSlice";
import { setbreadcrumb } from "../redux/slices/breadcrumbSlice";
import Select from "../components/select/Select";

const selectData = [
    {
        id : 1 , 
        name : "Earning"
    }
]

export default function Page() {
    const dispatch = useDispatch()
   const {active,index} = useSelector((state)=>state.salaryComponentReducer)

  

   useEffect(()=>{
    dispatch(getActive())
    dispatch(setbreadcrumb(index == 0 ? ["Setting","Salary Component", "Earning"] : ["Setting","Salary Component", "Benifit & Deduction"]))
   },[dispatch])


   const setMyIndex = (val) =>{
    console.log(val)
    dispatch(setThisIndex(val))
   }

  return (
    <main>
        <div className="row">
        <div className="col-md-6">
        <ul className="nav nav-tabs">
          <li className="nav-item active">
            <a className={index==0 ? active : "nav-link"} href="/salary-component"  onClick={()=>setMyIndex(0)}>
              Earning
            </a>
          </li>
          <li className="nav-item">
            <a className={index==1 ? active : "nav-link"} href="/salary-component" onClick={()=>setMyIndex(1)}>
              Benifit & Deductions
            </a>
          </li>
        </ul>
        </div>
        <div className="col-md-4">
           
        </div>
        <div className="col-md-1"> 
        <Select data={selectData} />
        </div>
        <div className="col-md-2"></div>
      </div>
      {
        index == 0 ?
        <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Earning </h6>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
:
<div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Benifit & Deduction </h6>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>

      }
      
    </main>
  );
}
