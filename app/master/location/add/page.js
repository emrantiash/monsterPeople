"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addLocation,updateLocation } from "@/app/redux/slices/locationSlice";
import { getAllCountry, getAllCity } from "@/app/redux/slices/basicSlices";
import { useRouter } from "next/navigation";
import Label from "@/app/components/label/Label";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Select from "@/app/components/select/Select";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";

const href = "/master/location";
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

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [val, setVal] = useState("");
  const [isActive, setIsActive] = useState(true);
  const action = useSelector((state) => state.masterReducer.action);
  const document = useSelector((state) => state.masterReducer.document);

  console.log(document);

  const GrandChild = action == "Add" ? "Add New" : "Edit ";

  useEffect(() => {
    dispatch(setbreadcrumb(["Master", "Location", GrandChild]));
    dispatch(getAllCountry()).then(function (e) {
      e.payload && e.payload.success && setCountry(e.payload.payload[0]);
    });
  }, [dispatch]);

  useEffect(() => {
    Object.keys(document).length > 0 && setVal(document.name);
    Object.keys(document).length > 0 && setAddress(document.addressOne);
    Object.keys(document).length > 0 && setSelectedCity(document.city.id);
    Object.keys(document).length > 0 && setSelectedCountry(document.country.id);
  }, [Object.keys(document).length > 0]);

  const changeUserFieldHandler = (e) => {
    setVal(e.target.value);
  };

  const changeAddressFieldHandler = (e) => {
    setAddress(e.target.value);
  };

  const _getStatus = (e) => {
    setIsActive(e.target.value);
  };

  const _getCountry = (e) => {
    console.log(e.target.value);
    setSelectedCountry(e.target.value);
    const tails = "countryId=" + e.target.value;
    dispatch(getAllCity(tails)).then(function (e) {
      e.payload && e.payload.success && setCity(e.payload.payload[0]);
    });
  };

  const _getCity = (e) => {
    console.log(e.target.value);
    setSelectedCity(e.target.value);
  };

  const _submit = () => {
    if (action == "Add" && val != "") {
      let options = {
        name: val,
        cityId: parseInt(selectedCity),
        countryId: parseInt(selectedCountry),
        addressOne: address,
      };
      console.log(options);
      dispatch(addLocation(options)).then(function (e) {
        e.payload.success && router.push(href);
      });
    }

    if (action == "Edit" && val != "") {
      let options = {
        workLocationId: document.id,
        isActive: true,
        workLocationInfo: {
          name: val,
          cityId: parseInt(selectedCity),
          countryId: parseInt(selectedCountry),
          addressOne: address,
          addressTwo: "string"
        }
      };
      console.log(options)
      dispatch(updateLocation(options)).then(function (e) {
        // console.log(e)
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
          <Label title="Location Name" />
          <Input
            placeholder=""
            value={val}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
        <div>
          <Label title="Address" />
          <Input
            placeholder="Address line 1"
            value={address}
            onChange={(e) => changeAddressFieldHandler(e)}
          />
          <Input
            placeholder="Address line 2"
            // value={val}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <div>
            <Label title="Country" />
            <Select
              placement
              name
              text={
                Object.keys(document).length > 0 ? document.country.name : "Select "
              }
              selected="Japan"
              data={country}
              onchange={_getCountry}
            />
          </div>
          &nbsp;
          <div>
            <Label title="City" />
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
        </div>
        {/* <div>
          {action != "Add" && (
            <Select
              data={data}
              style={{ marginBottom: 10 }}
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
