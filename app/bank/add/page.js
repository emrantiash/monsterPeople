"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBank, updateBank } from "@/app/redux/slices/bankSlice";
import { getOnlyTrueDivision } from "@/app/redux/slices/divisionSlices";
import { getAllCountry, getAllCity } from "@/app/redux/slices/basicSlices";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import { useRouter } from "next/navigation";
import Label from "@/app/components/label/Label";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Select from "@/app/components/select/Select";

const href = "/bank";
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
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [selectedCity, setSelectedCity] = useState(0);
  const [flag, setFlag] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [val, setVal] = useState("");
  const [branch, setBranch] = useState("");
  const [routing, setRouting] = useState("");
  const [isActive, setIsActive] = useState(true);
  const action = useSelector((state) => state.masterReducer.action);
  const document = useSelector((state) => state.masterReducer.document);

  const GrandChild = action == "Add" ? "Add New" : "Edit ";

  useEffect(() => {
    dispatch(setbreadcrumb(["Master", "Bank", GrandChild]));
  }, [dispatch]);

  useEffect(() => {
    Object.keys(document).length > 0 && setVal(document.name);
    Object.keys(document).length > 0 && setBranch(document.branchName);
    Object.keys(document).length > 0 && setRouting(document.routingNumber);
    Object.keys(document).length > 0 && setSelectedCity(document.city.id);
    Object.keys(document).length > 0 && setSelectedCountry(document.country.id);
    Object.keys(document).length > 0 &&
      setIsActive(document.isActive ? true : false);
  }, [Object.keys(document).length > 0]);

  useEffect(() => {
    dispatch(getAllCountry()).then(function (e) {
      e.payload && e.payload.success && setCountry(e.payload.payload[0]);
    });
  }, [dispatch]);

  const changeUserFieldHandler = (e) => {
    const { name, value } = e.target;
    name == "name"
      ? setVal(value)
      : name == "branch"
      ? setBranch(value)
      : setRouting(value);
  };
  const _getCountry = (e) => {
    setFlag(e.target.value != "Select" ? true : false);
    setSelectedCountry(e.target.value);
    const tails = "countryId=" + e.target.value;
    dispatch(getAllCity(tails)).then(function (e) {
      e.payload && e.payload.success && setCity(e.payload.payload[0]);
    });
  };

  const _getCity = (e) => {
    setSelectedCity(e.target.value);
  };

  const _getStatus = (e) => {
    setIsActive(e.target.value);
  };

  const _submit = () => {
    setSubmit(true);
    if (action == "Add" && val != "" && branch != "" && routing != "") {
      let options = {
        name: val,
        branchName: branch,
        routingNumber: routing,
        city: selectedCity,
        country: selectedCountry,
      };

   
      dispatch(postBank(options)).then(function (e) {
        e.payload.success && (window.location.href = href);
      });
    }

    if (action == "Edit" && val != "") {
      let options = {
        id: document.id,
        bankDto: {
          name: val,
          branchName: branch,
          routingNumber: routing,
          city: selectedCity,
          country: selectedCountry,
        },
      };
      dispatch(updateBank(options)).then(function (e) {
        e.payload.success && (window.location.href = href);
      });
    }
  };

  const _cancel = () => {
    window.location.href = href;
  };
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-3">
        <div>
          <Label title="Bank Name" required />
          <Input
            placeholder=""
            name="name"
            value={val}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
        <div>
          <Label title="Branch Name" required />
          <Input
            placeholder=""
            name="branch"
            value={branch}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
        <div>
          <Label title="Routing Number" required />
          <Input
            placeholder=""
            name="routing"
            value={routing}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
        <div>
          <Label title="Country" required />
          <Select
            placement
            name
            text={
              Object.keys(document).length > 0
                ? document.country.name
                : "Select "
            }
            data={country}
            onchange={_getCountry}
          />
        </div>
        <div>
          <Label title="City" required />
          <Select
            placement
            name
            text={
              Object.keys(document).length > 0 ? document.city.name : "Select "
            }
            data={city}
            onchange={_getCity}
          />
        </div>
        {/* <div>
          {action != "Add" && (
            <Select
              placement
              name
              text={document.isActive ? "Active" : "In-Active"}
              data={data}
              onchange={_getStatus}
            />
          )}
        </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
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
