"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import { getDesignation } from "@/app/redux/slices/designationSlice";
import {
  saveDocument,
  getActionType,
} from "@/app/redux/slices/masterSlices";
import Button from "@/app/components/button/Button";
import Table from "@/app/components/table/Table";
import Loading from "@/app/components/loading/Loading";
import { Inactive } from "../utils/constant/inactive";

const thead = [
  {
    id: 1,
    name: "Sl.",
  },

  {
    id: 2,
    name: "Designation",
  },
  // {
  //   id: 3,
  //   name: "Action",
  // }
];

export default function Page() {
  const router = useRouter()
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.designationReducer.isLoading)
  const tail = "isActiveOnly=false"
  const dataset = useSelector((state)=>state.designationReducer.designation)

  useEffect(() => {
    dispatch(setbreadcrumb(["Master", "Designation"]));
    dispatch(getDesignation(tail))
  }, [dispatch]);

   console.log(dataset)

  function makeTheData(data) {
    let arr = [];
    data.map((data, index) =>
      arr.push({
        id: data.id,
        Sl: index + 1,
        name: data.name,
        
        // active: data.isActive   ? "Active" : "In-Active",
      })
    );
    return arr;
  }

  const _tableOptions = (row) => {
    dispatch(saveDocument(row));
    dispatch(getActionType("Edit"));
    router.push("/designation/add");
  };

  const _saveActionType = (_val) => {
    dispatch(saveDocument({}));
    dispatch(getActionType(_val));
  };
  return (
    <div>
    <div className="row">
      <div className="col-10"></div>
      <div
        className="col-2"
        style={{ color: "green", height: 30, cursor: "pointer" }}
      >
        <Link
          href="/designation/add"
          onClick={() => _saveActionType("Add")}
        >
          {/* <i className="fas fa-plus fa-2x"></i> */}
          <Button class="btn btn-success text-table" text="Add New"
          icon = {<i className="fas fa-plus"></i>}
          />
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col-1"></div>
      <div className="col-8">
      <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Designation Table 
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  {

                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead>
                        <tr>
                          <th>Sl.</th>
                          <th>Designation</th>
                          <th>Status</th>
                          <th>Action</th>
                        
                        </tr>
                      </thead>
                    
                      <tbody>
                        {
                          dataset.map((data,index)=>
                          <tr className="text-table" key={index} 
                          style={{
                            backgroundColor : !data.isActive  && Inactive.background,
                            color : !data.isActive && Inactive.color
                          }}
                          >
                          <td>{index + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.isActive ? "Active" : Inactive.inactive}</td>
                          <td onClick={()=>_tableOptions(data)} style={{cursor : 'pointer'}}>Edit</td>
                          </tr>
                          
                          )
                        }
                        
                      </tbody>
                    </table>
                  }
                </div>
              </div>
            </div>
        
        {/* <Table
          options
          thead={thead}
          tbody={dataset}
           makeOption={_tableOptions}
        /> */}
         <Loading isLoading={loading}/>
      </div>
      <div className="col-2"></div>
      
    </div>
   
  </div>
  )
}
