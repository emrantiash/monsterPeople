"use client"
import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Link from 'next/link'
import { setbreadcrumb } from '../redux/slices/breadcrumbSlice'
import { getBank } from '../redux/slices/bankSlice'
import {
  saveDocument,
  getActionType,
} from "@/app/redux/slices/masterSlices";
import { useRouter } from "next/navigation";
import Button from "@/app/components/button/Button";
import Loading from '../components/loading/Loading'

export default function page() {
  const dispatch = useDispatch()
  const router = useRouter()
  const {loading,data } = useSelector((state)=>state.bankReducer)


  useEffect(() => {
    dispatch(setbreadcrumb(["Master", "Bank"]));
    dispatch(getBank())
   
  }, [dispatch]);

  const _tableOptions = (row) => {
    console.log(row)
    dispatch(saveDocument(row));
    dispatch(getActionType("Edit"));
    router.push("/bank/add");
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
            href="/bank/add"
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
                  Bank Table 
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
                      <thead className="text-table">
                        <tr>
                          <th>Sl.</th>
                          <th>Bank Name</th>
                          <th>Branch</th>
                          <th>Routing No.</th>
                          <th>City</th>
                          <th>Country</th>
                          <th>Action</th>
                        
                        </tr>
                      </thead>
                    
                      <tbody>
                        {
                          data.map((data,index)=>
                          <tr className="text-table" key={index} 
                          // style={{
                          //   backgroundColor : !data.isActive && '#f3f3f3',
                          //   color : !data.isActive && 'pink'
                          // }}
                          >
                          <td>{index + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.branchName}</td>
                         <td>{data.routingNumber}</td>
                         <td>{data.city.name}</td>
                         <td>{data.country.name}</td>
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
