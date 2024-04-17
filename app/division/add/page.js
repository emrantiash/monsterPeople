"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { createDivision ,updateDivision} from "@/app/redux/slices/divisionSlices";
import { useRouter } from "next/navigation";
import Label from "@/app/components/label/Label";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Select from "@/app/components/select/Select";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import { Inactive } from "@/app/utils/constant/inactive";

const href = "/division";
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

export default function page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const [isActive, setIsActive] = useState(true);
  const action = useSelector((state) => state.masterReducer.action);
  const document = useSelector((state) => state.masterReducer.document);

  const GrandChild = action == "Add" ? "Add New" : "Edit ";


  console.log(document)

  useEffect(()=>{
    dispatch(setbreadcrumb(["Master","Division",GrandChild]))
  },[dispatch])

  useEffect(() => {
    Object.keys(document).length > 0 && setVal(document.name);
    Object.keys(document).length > 0 && setIsActive(document.isActive);
  }, [ Object.keys(document).length > 0]);

  const changeUserFieldHandler = (e) => {
    setVal(e.target.value);
  };

  const _getStatus = (e) => {
    setIsActive(e.target.value);
  };


  const _submit = () => {
    if (action == "Add" && val != "") {
      let options = {
        attributeName: val,
      };
      dispatch(createDivision(options)).then(function (e) {
        e.payload.success && (window.location.href = (href))
      });
    }

    if (action == "Edit" && val != "") {
      let options = {
        attributeId: document.id,
        newName: val,
        isActive: isActive,
      };
      dispatch(updateDivision(options)).then(function (e) {
        e.payload.success && (window.location.href = "/division" )
      });
    }
  };

  const _cancel = () => {
    router.push(href)
  };
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-2">
        <div>
          <Label title="Name Of The Division" />
          <Input
            placeholder=""
            value={val}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
        <div>
          {action != "Add" && (
            <Select
            placement
            name
            text = {isActive ? "Active" : Inactive.inactive}
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
            class="btn btn-success "
            text={action == "Add" ? "Submit" : "Update"}
            width={120}
            onclick={_submit}
          />
          &nbsp;
          <Button
            class="btn btn-outline-info "
            text="Cancel "
            onclick={_cancel}
          />
        </div>
      </div>
    </div>
  );
}
