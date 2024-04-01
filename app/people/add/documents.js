import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountry } from "@/app/redux/slices/basicSlices";
import { uploadDocument } from "@/app/redux/slices/employeeSlice";
import Image from "next/image";
import styles from "./page.style";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Label from "@/app/components/label/Label";
import Select from "@/app/components/select/Select";
import noImage from "../../assets/img/people/no-image.jpg";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["PDF"];

export default function Documents() {
  const dispatch = useDispatch();
  const thisEmployeeName = useSelector(
    (state) => state.employeeReducer.thisEmployeeName
  );
  const thisEmployeeId = useSelector(
    (state) => state.employeeReducer.thisEmployeeId
  );
  const [image, setImage] = useState("");
  const [createObjectURL, setCreateObjectURL] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [country, setCountry] = useState([]);
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState("");
  const [userField, setUserField] = useState({
    docNumber: "",
    issueOn: "",
    validFrom: "",
    expiresOn: "",
  });

  const changeUserFieldHandler = (e) => {
    const { name, value } = e.target;

    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(userField);

  useEffect(() => {
    dispatch(getAllCountry()).then(function (e) {
      e.payload && e.payload.success
        ? setCountry(e.payload.payload[0])
        : setCountry([]);
    });
  }, [dispatch]);

  const _getCountry = (e) => {};

  const handleChange = (event) => {
    console.log(event);
    // const myNewFile = new File([event], 'new_name.png', {type: myFile.type});
    setFile(event);
    // setFile((event) => [event, ...event,name="123"]);
    setFiles((oldMessages) => [event, ...oldMessages]); // if array
    // if (event.target.files && event.target.files[0]) {
    //   const i = event.target.files[0];

    //   setFiles(i);
    //   // setCreateObjectURL(URL.createObjectURL(i));
    // }
  };

  console.log(file)

  const _uploadDocument = () => {

    let option = {
      file ,
      fileInfo: {
        employeeId: 0,
        documentCode: "1334",
        issuedOn: "2024-04-01",
        validFrom: "2024-04-01",
        expiresOn: "2024-04-01",
      },
    };
    // let file = file
    // const parentObj = [fileInfo,file ]
    dispatch(uploadDocument(option)).then(function (e) {
      console.log(e);
    });
  };

  const _submit = () => {};
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
              {Array.isArray(files) &&
                files.length > 0 &&
                files.map((data, index) => (
                  <div
                    key={index}
                    style={{
                      // backgroundColor : 'yellow',
                      display: "flex",
                      flexDirection: "row",
                      marginRight: 5,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <i className="fas fa-file-word fa-4x" />
                      <div className="text-table">{data.name}</div>
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
                <i className="fas fa-folder fa-4x "></i>
                <div className="text-xs" style={styles.bottom}>
                  Please ensure each file size should not exceed 5KB.
                </div>

                {/* <Button
                  class="btn btn-outline-success text-table"
                  text="Upload "
                /> */}
              </div>
              <div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/* <Button
                    class="btn btn-success btn-lg text-table"
                    text="Save and Finish"
                    onclick={_submit}
                  />{" "} */}
                  &nbsp;
                  <Button
                    class="btn btn-outline-success btn-lg text-table"
                    text="Will do later"
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
                        class="btn btn-success"
                        text="Upload Document"
                        onclick={_uploadDocument}
                      />
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
