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
  const [loading,setLoading] = useState(true)
  const tail = "isActiveOnly=false"
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    dispatch(setbreadcrumb(["Master", "Designation"]));
    dispatch(getDesignation(tail)).then(function (e) {
      e.payload &&
        e.payload.success && 
        (
          setDataset(makeTheData(e.payload.payload[0])),
          setLoading(false)
        )
       
    });
  }, [dispatch]);

  // console.log(dataset)

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
    router.push("/master/designation/add");
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
          href="/master/designation/add"
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
        
        <Table
          options
          thead={thead}
          tbody={dataset}
           makeOption={_tableOptions}
        />
      </div>
      <div className="col-2"></div>
    </div>
    <Loading isLoading={loading}/>
  </div>
  )
}
