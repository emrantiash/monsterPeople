"use client"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setbreadcrumb } from "./redux/slices/breadcrumbSlice";
import Duration from "./components/duration/Duration";
import Calendar from "./components/calender/Calender";
import Month from "./components/month/Month";

import Event from "./components/event/Event";
import MyTeam from "./components/myteam/MyTeam";
import OnLeave from "./components/onleave/OnLeave";
import Announcement from "./components/announcement/Announcement";
import Ticket from "./components/ticket/Ticket";

const top = 10;
const normal = { fontWeight: "normal", color: "#000" };

export default function Home() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setbreadcrumb(["Home"]))
  })
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <div>HELLO MONSTAR PEOPLE.</div>
    // </main>
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <Duration />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <Calendar />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <Month />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <Ticket />
            {/* <div
              className="row">
              <div>
                <Ticket />
              </div>

              <div>
                <Submit />
              </div>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <Event />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <MyTeam />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <OnLeave />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <Announcement />
          </div>
        </div>
      </div>
    </main>
  );
}
