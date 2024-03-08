import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeEmployeeRoll } from "@/app/redux/slices/employeeSlice";
import styles from "./page.style";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Label from "@/app/components/label/Label";


export default function PaymentInfo() {
    const dispatch = useDispatch()
  const [box, setBox] = useState(false);

  const _openDetailsBox = () => {
    setBox(true);
  };

  const _submit = () => {
    dispatch(changeEmployeeRoll([3,true]))
  };
  return (
    <main>
      <div className="row">
        <div className="col-md-3" style={{ backgroundColor: "" }}></div>
        <div className="col-md-6" style={{ backgroundColor: "" }}>
          <div
            className="text-lg font-weight-bold"
            style={{ ...styles.bobyInnerRow, ...styles.spacing }}
          >
            How would you like to pay this employee?
          </div>
          <hr />
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div
          className="col-sm-6"
          style={styles.transferBox}
          
        >
          <div>
            <div
              className="text-md font-weight-bold"
              style={{ ...styles.spacing }}
            >
              Manual Bank Trandsfer
              <div className="text-xs font-weight-normal">
                <div>
                  Download SIF file and process the payment through WPS or your
                  bank's website
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: 30, height: 30 }}>
            <Input
            onChange={_openDetailsBox}
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
              placeholder=""
            />
          </div>
        </div>
      </div>
      {/* box */}
      {box && (
        <>
         <div className="row" style={{ marginTop: 30 }}>
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div style={styles.top}>
                <div style={styles.bottom}>
                <Label title="Account Holder Name" />
                </div>
             
              <Input placeholder="" />
            </div>

            
          </div>
        </div>
        <div className="row" style={{ marginTop: 0 }}>
          <div className="col-sm-3"></div>
          <div className="col-sm-3">
          <div style={styles.top}>
                <div style={styles.bottom}>
                <Label title="Bank Name" />
                </div>
             
              <Input placeholder="" />
            </div>
          </div>
          <div className="col-sm-3">
          <div style={styles.top}>
                <div style={styles.bottom}>
                <Label title="Account Number (IBAN)" />
                </div>
             
              <Input placeholder="" />
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: 0 }}>
          <div className="col-sm-3"></div>
          <div className="col-sm-3">
          <div style={styles.top}>
                <div style={styles.bottom}>
                <Label title="Routing Number" />
                </div>
             
              <Input placeholder="" />
            </div>
          </div>
          <div className="col-sm-3">
          <div style={styles.top}>
                <div style={styles.bottom}>
                <Label title="Swift Code" />
                </div>
             
              <Input placeholder="" />
            </div>
          </div>
        </div>
        </>
       
        
      )}

      {/* end box */}
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6" style={styles.transferBox}>
          <div>
            <div
              className="text-md font-weight-bold"
              style={{ ...styles.spacing }}
            >
              Chaque
            </div>
          </div>
          <div style={{ width: 30, height: 30 }}>
            <Input
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6" style={styles.transferBox}>
          <div>
            <div
              className="text-md font-weight-bold"
              style={{ ...styles.spacing }}
            >
              Cash
            </div>
          </div>
          <div style={{ width: 30, height: 30 }}>
            <Input
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 40 }}>
        <div className="col-sm-3"></div>
        <div className="col-sm-6">{/* <hr /> */}</div>
      </div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6" style={styles.transferBox}>
          <div style={styles.buttonGroup}>
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
          </div>
        </div>
      </div>
    </main>
  );
}
