"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  createDivision,
  updateDivision,
} from "@/app/redux/slices/divisionSlices";
import {
  createDepartment,
  updateDepartment,
} from "@/app/redux/slices/departmentSlice";
import { getOnlyTrueDivision } from "@/app/redux/slices/divisionSlices";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import { useRouter } from "next/navigation";
import Label from "@/app/components/label/Label";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Select from "@/app/components/select/Select";

const href = "/master/department";
const data = [
  {
    id: true,
    name: "Active",
  },
  {
    id: false,
    name: "InActive",
  },
];

export default function page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [division, setDivision] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState(0);
  const [flag, setFlag] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [val, setVal] = useState("");
  const [isActive, setIsActive] = useState(true);
  const action = useSelector((state) => state.masterReducer.action);
  const document = useSelector((state) => state.masterReducer.document);

  console.log(document)

  const GrandChild = action == "Add" ? "Add New" : "Edit ";

  useEffect(() => {
    dispatch(setbreadcrumb(["Master", "Department", GrandChild]));
  }, [dispatch]);

  useEffect(() => {
    Object.keys(document).length > 0 && setVal(document.name);
    Object.keys(document).length > 0 && setSelectedDivision(document.id[1]);
    Object.keys(document).length > 0 && setIsActive(document.active == "Active" ? true : false );
  }, [Object.keys(document).length > 0]);

  useEffect(() => {
    dispatch(getOnlyTrueDivision()).then(function (e) {
      e.payload && e.payload.success && setDivision(e.payload.payload[0]);
    });
  }, [dispatch]);

  const changeUserFieldHandler = (e) => {
    setVal(e.target.value);
  };
  const _getDivision = (e) => {
    console.log(e.target.value);
    setFlag(e.target.value != "Select" ? true : false);
    setSelectedDivision(e.target.value);
  };

  const _getStatus = (e) => {
    setIsActive(e.target.value);
  };

  const _submit = () => {
    setSubmit(true);
    if (action == "Add" && val != "" && flag) {
      let options = {
        name: val,
        isActive: true,
        divisionId: parseInt(selectedDivision),
        isAssignedToDivision: true,
      };

      dispatch(createDepartment(options)).then(function (e) {
        e.payload.success && router.push(href);
      });
    }

    if (action == "Edit" && val != "") {
      let options = {
        name: val,
        isActive: isActive,
        departmentId: document.id[0],
        divisionId: parseInt(selectedDivision)
      };
      console.log(options)
      dispatch(updateDepartment(options)).then(function (e) {
        e.payload.success && router.push(href);
      });
    }
  };

  const _cancel = () => {
    router.push(href);
  };
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-4">
        <div>
          <Label title="Select Division" required />
          <Select
            placement name
            text={document.division}
            style={{ marginBottom: 10, borderColor: submit && !flag && "red" }}
            data={division}
            onchange={_getDivision}
          />
        </div>
        <div>
          <Label title="Name Of The Department" required />
          <Input
            style={{ borderColor: submit && val == "" && "red" }}
            placeholder=""
            value={val}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
        <div>
          {action != "Add" && (
            <Select
            placement name
            text={document.active}
              data={data}
              style={{ marginBottom: 10 }}
              onchange={_getStatus}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            class="btn btn-success"
            text={action == "Add" ? "Submit" : "Update"}
            width={150}
            onclick={_submit}
          />
          &nbsp;
          <Button
            class="btn btn-outline-info"
            text="Cancel "
            onclick={_cancel}
          />
        </div>
      </div>
    </div>
  );
}
