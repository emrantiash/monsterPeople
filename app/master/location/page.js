"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import { getLocation } from "@/app/redux/slices/locationSlice";
import Button from "@/app/components/button/Button";
import { saveDocument, getActionType } from "@/app/redux/slices/masterSlices";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter()
  const dispatch = useDispatch();
  const tail = "isActiveOnly=false";
  const [address, setAddress] = useState([]);

  useEffect(() => {
    dispatch(setbreadcrumb(["Master", "Location"]));
    dispatch(getLocation(tail)).then(function (e) {
      e.payload && e.payload.success && setAddress(e.payload.payload[0]);
    });
  }, [dispatch]);

  console.log(address);

  const _tableOptions = (row) => {
    console.log(row)
    dispatch(saveDocument(row));
    dispatch(getActionType("Edit"));
    router.push("/master/location/add");
  };

  const _saveActionType = (_val) => {
    dispatch(saveDocument({}));
    dispatch(getActionType(_val));
  };

  return (
    <div>
      <div className="row">
        <div className="col-9"></div>
        <div className="col-3">
          <Link
            href="/master/location/add"
            onClick={() => _saveActionType("Add")}
          >
            <Button
              class="btn btn-success text-table"
              text="Add Location"
              icon={<i className="fas fa-plus"></i>}
            />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row" style={{
        margin:20
      }}>
        {/* <div className="col-1"></div> */}
        <div className="col-3" >
          <div className="card border-left-primary shadow h-100 py-0">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div
                    className="text-table  text-primary  mb-1"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Organisation Address</div>
                    <div>
                      <i className="fas fa-ellipsis-h fa-x text-gray-800"></i>
                    </div>
                  </div>
                  <div className=" mb-0  text-table">Dhaka</div>
                  <div className=" mb-0  text-xs">
                    House#29,22,Dhanmondi,Dhaka-1216
                  </div>
                  <div
                    className=" mb-0  text-xs"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <div className="font-weight-bold"> 5 </div> &nbsp; Employees
                  </div>
                </div>
                <div className="col-auto"></div>
              </div>
            </div>
            <div
              className="text-xs"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div></div>
              <div></div>
              <div
                style={{
                  color: "#fff",
                  padding: 5,
                  marginRight: 20,
                  backgroundColor: "#37B5A7",
                }}
              >
                Default Address
              </div>
            </div>
          </div>
        </div>
      </div>
      &nbsp;
      <div className="row" style={{
        margin:20
      }}>
        {/* <div className="col-1"></div> */}
        {Array.isArray(address) &&
          address.length > 0 &&
          address.map((data, index) => (
            <div className="col-3" key={index} style={{
              marginBottom : 20
            }}>
              <div className="card border-left-warning shadow h-100 py-0">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        className="text-table  text-primary  mb-1"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>{data.name}</div>
                        <div>
                          <i className="fas fa-ellipsis-h fa-x text-gray-800" 
                          onClick={()=>_tableOptions(data)} style={{cursor : 'pointer'}}
                          ></i>
                        </div>
                      </div>
                      <div className=" mb-0  text-table">{data.city.name}</div>
                      <div className=" mb-0  text-xs">{data.addressOne}</div>
                      <div
                        className=" mb-0  text-xs"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <div className="font-weight-bold"> 5 </div> &nbsp;
                        Employees
                      </div>
                    </div>
                    <div className="col-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          
          ))}
      </div>
    </div>
  );
}
