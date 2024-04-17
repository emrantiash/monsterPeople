import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadDocumentImage,
  uploadDocumentInfo,
} from "@/app/redux/slices/employeeSlice";
import styles from "./page.style";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Label from "@/app/components/label/Label";
import { FileUploader } from "react-drag-drop-files";
import { useRouter } from "next/navigation";
import Progressbar from "@/app/components/progressbar/Progressbar";
import commonStyle from "@/app/components/style/Styles";

const fileTypes = ["PDF", "JPEG", "JPG"];

export default function Documents() {
  const dispatch = useDispatch();
  const router = useRouter();
  const thisEmployeeName = useSelector(
    (state) => state.employeeReducer.thisEmployeeName
  );
  const thisEmployeeId = useSelector(
    (state) => state.employeeReducer.thisEmployeeId
  );
  const [completed, setCompleted] = useState(0);

  const [files, setFiles] = useState([]);
  const [file, setFile] = useState("");
  const [userField, setUserField] = useState({
    docNumber: "",
    issueOn: "",
    validFrom: "",
    expiresOn: "",
  });

  const getHood = () => {
    let i;
    setTimeout(() => setCompleted(10), 100);
    setTimeout(() => setCompleted(20), 2000);
    setTimeout(() => setCompleted(40), 3000);
    setTimeout(() => setCompleted(50), 3500);
    setTimeout(() => setCompleted(60), 4000);
    setTimeout(() => setCompleted(75), 5000);
    setTimeout(() => setCompleted(95), 5000);
    setTimeout(() => setCompleted(100), 8000);
    setTimeout(()=>setFiles((oldMessages) => [file, ...oldMessages]),8500)

  }

  const changeUserFieldHandler = (e) => {
    const { name, value } = e.target;

    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (event) => {
    setFile(event);
    // setFiles((oldMessages) => [event, ...oldMessages]);
  };

  const _uploadDocument = () => {
    setCompleted(0)
    var option;

    const body = new FormData();
    body.append("file", file);

    dispatch(uploadDocumentImage(body)).then(function (e) {
      e.payload &&
        e.payload.success &&
        ((option = {
          docEntryId: e.payload.payload[0],
          employeeId: thisEmployeeId,
          documentCode: userField.docNumber,
          issuedOn: userField.issueOn,
          validFrom: userField.validFrom,
          expiresOn: userField.expiresOn,
        }),
          dispatch(uploadDocumentInfo(option)).then(function (e) {

            e.payload &&
              e.payload.success && (getHood())

          }));
    });
  };

  const _submit = () => { };
  return (
    <main>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-5"></div>
      </div>

      <div>
        <div className="row" style={{ backgroundColor: "" }}>
          <div className="col-6">
            <div
              className="text-table"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              
             
              {Array.isArray(files)  &&
                files.length > 0 &&
                files.map((data, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginRight: 5,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '',
                        padding: 5,
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        border: "3px solid #f8f8f8",
                      }}
                    >
                      <div style={{ color: 'tomato' }}><i className="fas fa-file-word fa-4x" /></div>
                      <div className="text-table">{data.name.substring(0, 9)}</div>
                    </div>
                  </div>
                ))}
            </div>

            <div
              style={{
                marginTop: 10,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div style={styles.documentMergin}>
               <div style={{color:'#f6c23e'}}><i className="fas fa-folder fa-4x "></i></div> 
                <div className="text-xs" style={styles.bottom}>
                  Please ensure each file size should not exceed 5KB.
                </div>
              </div>
              <div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  &nbsp;
                  {
                    Array.isArray(files) && files.length > 0 &&
                    <Button
                      class="btn btn-success btn-lg text-table"
                      text="Complete Uploading"
                      onclick={() => window.location.href = '/people'}
                    />
                  }

                  &nbsp;
                  <Button
                    class="btn btn-outline-success btn-lg text-table"
                    text="Will do later"
                    onclick={() => window.location.href = '/people'}
                  />

                </div>
              </div>
            </div>
          </div>
          <div className="col-6 " style={{ backgroundColor: "" }}>
            <div className="row" style={{}}>
              <div className="col-1"></div>
              <div className="col-9">
                <div
                  style={{
                    backgroundColor: "",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    // margin : 20 ,
                    height: 150,
                  }}
                >
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    style={{
                      // backgroundColor : 'red',
                      width: 200,
                      minHeight: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: 20,
                backgroundColor: "",
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              <div className="row">
                <div className="col-3"></div>
                <div className="col-7">
                  <div className="row">
                    <div className="col-6">
                      <Label title="Document Number" />
                      <Input
                        placeholder=""
                        name="docNumber"
                        onChange={(e) => changeUserFieldHandler(e)}
                      />
                    </div>
                    <div className="col-6">
                      <Label title="Issue On" />
                      <Input
                        type="date"
                        placeholder=""
                        name="issueOn"
                        onChange={(e) => changeUserFieldHandler(e)}
                      />
                    </div>
                  </div>

                  <div className="row" style={styles.docBox}>
                    <div className="col-6">
                      <Label title="Valid From" />
                      <Input
                        type="date"
                        placeholder=""
                        name="validFrom"
                        onChange={(e) => changeUserFieldHandler(e)}
                      />
                    </div>
                    <div className="col-6">
                      <Label title="Expires On" />
                      <Input
                        type="date"
                        placeholder=""
                        name="expiresOn"
                        onChange={(e) => changeUserFieldHandler(e)}
                      />
                    </div>
                  </div>
                  <div className="row" style={styles.docBox}>
                    <div className="col-6">
                      <Button
                        class="btn btn-success text-table"
                        text="Upload Document"
                        onclick={_uploadDocument}
                      />

                      &nbsp;
                      {
                completed > 0 && completed < 100 && 
                <Progressbar completed={completed} />
              }
                    </div>
                    <div className="col-6">{/* */}</div>
                  </div>
                </div>
              </div>
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
