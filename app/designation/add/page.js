"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { createDesignation,updateDesignation } from "@/app/redux/slices/designationSlice";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Select from "@/app/components/select/Select";
import Label from "@/app/components/label/Label";
import { Inactive } from "@/app/utils/constant/inactive";

const href = "/designation";

const data = [
  {
    id: true,
    name: "Active",
  },
  {
    id: false,
    name: Inactive.inactive,
  },
];

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const [isActive, setIsActive] = useState(true);
  const action = useSelector((state) => state.masterReducer.action);
  const document = useSelector(
    (state) => state.masterReducer.document
  );

  console.log(document)

  const GrandChild = action == "Add" ? "Add New" : "Edit "

  const changeUserFieldHandler = (e) => {
    setVal(e.target.value);
  };

  useEffect(()=>{
    dispatch(setbreadcrumb(["Master","Designation" , GrandChild]))
  },[dispatch])

  useEffect(() => {
    Object.keys(document).length > 0 && setVal(document.name);
    Object.keys(document).length > 0 && setIsActive(document.isActive  ? true : false );
  }, [ Object.keys(document).length > 0]);

  const _getStatus = (e) => {
    setIsActive(e.target.value);
  };

  const _submit = () => {
    if (action == "Add" && val != "") {
      let options = {
        attributeName: val,
      };
      console.log(options)
      dispatch(createDesignation(options)).then(function (e) {
        
        e.payload &&  e.payload.success && (window.location.href = href)
      });
    }
    if (action == "Edit" && val != "") {
      let options = {
        designationId: document.id,
        name: val,
        isActive: isActive == 'true' ? true : false
      };
      dispatch(updateDesignation(options)).then(function (e) {
        e.payload.success &&  (window.location.href = href)
      });
    }
  };

  const _cancel = () =>{
    // router.push("/designation")
    (window.location.href = href)
  }
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-2">
        <div>
          <Label title="Name Of The Designation " />
          <Input
            placeholder=""
            value={val}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
        <div>
          {action != "Add" && (
            <Select
            placement name
            text={document.isActive ? "Active" : Inactive.inactive}
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
            alignItems : 'center'
          }}
        >
          <Button
            class="btn btn-success"
            text={action == "Add" ? "Submit" : "Update" } 
            width={150}
            onclick={_submit}
          />
          &nbsp;
          <Button class="btn btn-outline-info" text="Cancel " onclick={_cancel} />
           {/* <a href="/designation" className="text-xs">Cancel</a> */}
        </div>
      </div>
    </div>
  );
}
