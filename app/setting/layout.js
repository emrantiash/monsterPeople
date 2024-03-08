"use client"
// import Script from "next/script";
// import SettingBar from "../components/navbar/SettingBar"

export default function SettingLayout({

    children, // will be a page or nested layout
  }) {
    return (
      <>
      <section>
        {/* <SettingBar /> */}
        {/* Include shared UI here e.g. a header or sidebar */}
        {/* <Header /> */}
   
        {children}
      
      </section>
     
      </>
      
    )
  }

 
