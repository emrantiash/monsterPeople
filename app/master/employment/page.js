"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import { getEmploymentTypeDetails } from "@/app/redux/slices/basicSlices";
import {
  saveDocument,
  getActionType,
} from "@/app/redux/slices/masterSlices";
import Table from "@/app/components/table/Table";
import Button from "@/app/components/button/Button";

const thead = [
  {
    id: 1,
    name: "Employment Type",
  },
  {
    id: 2,
    name: "No. of Employees",
  },
  
  {
    id: 3,
    name: "Status",
  }
 
];

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    dispatch(setbreadcrumb(["Master", "Employment Type"]));
    dispatch(getEmploymentTypeDetails()).then(function (e) {
      e.payload.success && setDataset(makeTheData(e.payload.payload[0]))
    });
  }, [dispatch]);

  function makeTheData(data) {
    console.log(data);
    let arr = [];
    data.map((data, index) =>
      arr.push({
        id: data.id,
        name: data.name,
        count: data.totalCount,
        active : data.status == "Active" ? "Active" : "In-Active",
      })
    );
    return arr;
  }

  const _tableOptions = (row) => {
    dispatch(saveDocument(row));
    dispatch(getActionType("Edit"));
    router.push("/master/employment/add");
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
            href="/master/employment/add"
            onClick={() => _saveActionType("Add")}
          >
            {/* <i className="fas fa-plus fa-2x"></i> */}
            <Button class="btn btn-success " text ="Add New" 
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
    </div>
  );
}
