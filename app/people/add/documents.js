import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.style";
import Button from "@/app/components/button/Button";


export default function Documents() {
  const dispatch = useDispatch();

  const _submit = () => {};
  return (
    <main>
      <div style={{ ...styles.containerHeader }}>
        <div className="row" style={{ backgroundColor: "" }}>
          <div className="col-md-12">
            <div
              style={{
                marginTop: 60,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                height: 200,
              }}
            >
              <i className="fas fa-folder fa-4x "></i>
              <div className="text-xs" style={styles.bottom}>
                Please ensure each file size should not exceed 7MB.
              </div>
              <Button
                class="btn btn-outline-success text-table"
                text="Choose File"
                
              />
            </div>
            <div style={styles.buttonGroup}>
              <Button
                class="btn btn-success btn-lg text-table"
                text="Save and Continue"
                onclick={_submit}
              />{" "}
              &nbsp;
              <Button
                class="btn btn-outline-success btn-lg text-table"
                text="Cancel"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 20, backgroundColor: "" }}>
        <div className="col-md-4"></div>
        <div className="col-md-5" style={{ marginLeft: 30 }}>
          {/* <div style={styles.buttonGroup}>
            <Button
              class="btn btn-success btn-lg text-md"
              text="Save and Continue"
              onclick={_submit}
            />{" "}
            &nbsp;
            <Button
              class="btn btn-outline-success btn-lg text-md"
              text="Cancel"
            />
          </div> */}
        </div>
        <div className="col-md-3"></div>
      </div>

      {/* modal */}
   
    </main>
  );
}
