"use client";
import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import Label from "@/app/components/label/Label";
import Input from "@/app/components/input/Input";
import Textarea from "@/app/components/textarea/Textarea";
import Button from "@/app/components/button/Button";
import Card from "@/app/components/card/Card";
import Table from "@/app/components/table/Table";
import styles from "./page.style";
import Select from "@/app/components/select/Select";

const selectData = [
  {
    id: 1,
    name: "Monthly",
  },
  {
    id: 2,
    name: "Yearly",
  },
];

const thead = [
  {
    id: 1,
    name: "Sl.",
  },
  {
    id: 2,
    name: "Salary Component",
  },
  {
    id: 3,
    name: "Calculation Type",
  },
  {
    id: 4,
    name: "Monthly Amount",
  },
  {
    id: 5,
    name: "Annual Amount",
  },
];

export default function Page(props) {
  const dispatch = useDispatch();
  const [tbody , setTbody] = useState([{
    id : 1 ,
    name : 'Basic',
    type : "Fixed",
    mamount :  <Input placeholder="0" onChange={props.onChange} />,
    yamount : <Input placeholder="0" />

  }])

  useEffect(() => {
    dispatch(
      setbreadcrumb(["Setting ", "Salary Template", "Create New Template"])
    //   setTbody
    );
  }, [dispatch]);

  const _changeMAmount = (e) =>{
    console.log(e.target.value)

  }
  return (
    <main>
      <div className="row">
      {/* <Input placeholder="0" onChange={_changeMAmount} /> */}
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <Label title="Template Name" required />
          <Input placeholder="Name" />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <Label title="Description" />
          <Textarea placeholder="Max 200 char" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold  text-capitalize mb-1">
                    <div className="row">
                      <div className="col-md-6" style={styles.titleBox}>
                        Earning
                      </div>
                      <div className="col-md-1"></div>
                      <div className="col-md-2" style={styles.titleBox}>
                        <div>Pay Schedule</div>
                      </div>
                      <div className="col-md-3">
                        <Select data={selectData} />
                      </div>
                    </div>
                    <div className="row" style={{
                        marginTop :  20 
                    }}>
                      <div className="col-md-12">
                        <Table thead={thead} tbody ={tbody} onChange={_changeMAmount}/>
                      </div>
                    </div>
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
                </div>
                <div className="col-auto"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-1"></div>
      </div>
    </main>
  );
}
