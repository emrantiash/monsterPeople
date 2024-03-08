"use client";
import React, { useState ,useEffect,Suspense} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import commonStyle from "../style/Styles";
import Loading from "../loading/Loading";

// https://fullcalendar.io/docs/background-events

const dates = [
    {
        id : 1 ,
        date : '2024-02-01',
        title : 'present',
        status : 1
    },
    {
        id : 2 ,
        date : '2024-02-02',
        title : 'present',
        status : 1
    },
    {
        id : 3 ,
        date : '2024-02-03',
        title : 'present',
        status : 1
    },
    {
        id : 4 ,
        date : '2024-02-04',
        title : 'absent',
        status : 2
    },
    {
        id : 3 ,
        date : '2024-02-05',
        title : 'present',
        status : 1
    },
    {
        id : 4 ,
        date : '2024-02-06',
        title : 'absent',
        status : 1
    },
    {
        id : 5 ,
        date : '2024-02-07',
        title : 'present',
        status : 2
    },
    {
        id : 6,
        date : '2024-02-08',
        title : 'absent',
        status : 1
    }
]



export default function Calender() {
  const [value, setValue] = useState([]);
  

  useEffect(()=>{
    // setValue([
    //         { title: '', date: '2024-02-01',display: 'background',backgroundColor : 'red' },
    //         { title: '', date: '2024-02-02',display: 'background',backgroundColor : 'white'}
    //       ])

    dates.map((data)=>
        setValue(oldArray => [...oldArray,{ title: '', date: data.date,display : 'background',backgroundColor : data.status==1 ? 'green' : 'white' }] )
    )
  },[])

  return (
    <Suspense fallback={<Loading />}>
    <div
      className="card shadow h-100 "
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2" style={{
            fontSize : 10
          }}>
            <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              weekends={true}
            //   events={[
            //     { title: '', date: '2024-02-01',display: 'background',backgroundColor : 'red' },
            //     { title: 'leave', date: '2024-02-02' }
            //   ]}
           
            //   id = "calender"
            events={value}
            />
            <div 
            className="text-xs"
            style={{
                marginTop : 10 ,
               
            }}>
              <div >2 Days Missed</div>  
              <div><span style={{color:commonStyle.color.basicColor}}>18 </span> Days present </div>  
              <div style={{
                display : 'flex',
                justifyContent : 'flex-end',
                alignItems : 'center'
              }}>Details &nbsp;<i className="fas fa-arrow-right"></i></div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  );
}
