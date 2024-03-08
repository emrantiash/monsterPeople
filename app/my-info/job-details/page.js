"use client"
import React,{useState,useEffect} from 'react'//A1@b2@345!mlE@3
import { useDispatch,useSelector } from 'react-redux'
import styles from '../layout.style'
import Table from '@/app/components/table/Table'
import AddNew from '@/app/components/addnew/AddNew'

const statusHead = [
    {
        id : 1 ,
        name  :"Effective Date"
    },
    {
        id : 2 ,
        name  :"Employee Status"
    },
    {
        id : 3 ,
        name  :"Comments"
    },
    {
        id : 4 ,
        name  :"Action"
    }
]
const statusbody = [
    {
        // id : 1 ,
        edate  :"xx-xx-xxxx",
        status  : "active",
        comments : "",
        action : "..."
    }
]

const bonusHead = [
    {
        id : 1 ,
        name : "Effective Date"
    },
    {
        id : 1 ,
        name : "Effective Pay Date"
    },
    {
        id : 1 ,
        name : "Calculation Type"
    },
    {
        id : 1 ,
        name : "Amount"
    },
    {
        id : 1 ,
        name : "Remarks"
    },
]

const bonusBody = [
    {
        date : "xx-xx-xxxx",
        pdate : "xx-xx-xxxx",
        type : "100% of gross",
        amount : "xxxxxx",
        remarks : "Eid-Ul-Fitr"
    },
    {
        date : "xx-xx-xxxx",
        pdate : "xx-xx-xxxx",
        type : "100% of gross",
        amount : "xxxxxx",
        remarks : "Eid-Ul-Azha"
    }
]

const benifitHead = [
    {
        id : 1 ,
        name : "Effective Date"
    },
    {
        id : 1 ,
        name : "Benifit Name"
    },
    {
        id : 1 ,
        name : "Employee's Contribution"
    },
    {
        id : 1 ,
        name : "Employee's Deduction"
    },
    {
        id : 1 ,
        name : "Employeer Pays To"
    },
    {
        id : 1 ,
        name : "Comment"
    },
    {
        id : 1 ,
        name : "Action"
    },
]

const  benifitBody = [
    {
        edate : "xx-xx-xxxx",
        name  : "Medical Allowance",
        empcontribution : "3000/mo",
        empdeduction : "",
        eployerpaysto : "Delta Life Indsurance",
        comments : "Platinum",
        action : "..."
    },
    {
        edate : "xx-xx-xxxx",
        name  : "Car Allowance",
        empcontribution : "3000/mo",
        empdeduction : "",
        eployerpaysto : "Salaryt",
        comments : "Platinum",
        action : "..."
    },
    {
        edate : "xx-xx-xxxx",
        name  : "Gym Membership",
        empcontribution : "3000/mo",
        empdeduction : "",
        eployerpaysto : "Starbase",
        comments : "Platinum",
        action : "..."
    }, 
    {
        edate : "xx-xx-xxxx",
        name  : "Medical Allowance",
        empcontribution : "3000/mo",
        empdeduction : "",
        eployerpaysto : "Delta Life Indsurance",
        comments : "Platinum",
        action : "..."
    }
]

export default function Page() {
 


  return (
    <div>
        <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Employee Id</div>
        <div className="col-2 text-table">xxxxxxxx</div>
      </div>
      <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Joining Date</div>
        <div className="col-2 text-table">xx-xx-xxxx</div>
      </div>
      <div className="row" style={styles.personalMargin}>
        <div className="col-2 text-table font-weight-bold">Termination Date</div>
        <div className="col-2 text-table">xx-xx-xxxx</div>
      </div>
      <div className="row">
        <div className="col-10">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div className="text-table font-weight-bold">
            <i className="fas fa-birthday-cake"></i> &nbsp;Employee Status
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-10">
          <Table thead={statusHead} tbody={statusbody} />
         <AddNew href="" />
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <hr />
        </div>
      </div>
      {/* compensation */}
      <div className="row">
        <div className="col-10">
          <div className="text-table font-weight-bold">
            <i className="fas fa-birthday-cake"></i> &nbsp;Compensation
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-10">
          <Table thead={statusHead} tbody={statusbody} />
         <AddNew href="" />
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <hr />
        </div>
      </div>
      {/* bonus */}
      <div className="row">
        <div className="col-10">
          <div className="text-table font-weight-bold">
            <i className="fas fa-birthday-cake"></i> &nbsp;Festival Bonus
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-10">
          <Table thead={bonusHead} tbody={bonusBody} />
         <AddNew href="" />
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <hr />
        </div>
      </div>
      {/* benifit */}
      <div className="row">
        <div className="col-10">
          <div className="text-table font-weight-bold">
            <i className="fas fa-birthday-cake"></i> &nbsp;Benifit
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-10">
          <Table thead={benifitHead} tbody={benifitBody} />
         <AddNew href="" />
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <hr />
        </div>
      </div>
      {/* other earning */}
      <div className="row">
        <div className="col-10">
          <div className="text-table font-weight-bold">
            <i className="fas fa-birthday-cake"></i> &nbsp;Other Earning
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-10">
          <Table thead={bonusHead} tbody={bonusBody} />
         {/* <AddNew href="" /> */}
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <hr />
        </div>
      </div>
    </div>
  )
}
