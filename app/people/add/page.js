"use client";
import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getEmployeeRoll } from "@/app/redux/slices/employeeSlice";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import styles from "./page.style";

import BasicInfo from "./basicInfo";
import JobDetails from "./jobDetails";
import SalaryInfo from "./salaryInfo";
import PaymentInfo from "./paymentInfo";
import Documents from "./documents";





export default function page() {
    const dispatch = useDispatch()
    const status = useSelector((state)=>state.employeeReducer.empStatus)

    useEffect(()=>{
      dispatch(setbreadcrumb(["People","Emoloyee List","Add Employee"]))
      dispatch(getEmployeeRoll([false,false,false,false,false]))
    },[])

  return (
    <div style={styles.container}>
      
      

      <div style={styles.body}>
        {
         Array.isArray(status) && !status[0] ?
          // <JobDetails /> 
        //  <Documents />
              <BasicInfo />
          :
          Array.isArray(status) && status[0] && !status[1] ?
          <JobDetails /> 
          :
          Array.isArray(status) &&  status[0] && status[1] && !status[2] ?
          <Documents />
        
          :
          Array.isArray(status) &&  status[0] && status[1] && status[2] && !status[3] ?
          <PaymentInfo />
          :
          Array.isArray(status) && status[0] && status[1] && status[2] && status[3] && !status[4] && 
          <SalaryInfo />

        }
     
        
      </div>
    </div>
  );
}
