import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image"; //fill={true}
import styles from "./page.style";
import {
  changeEmployeeRoll,
  postEmployeeBasicInfo,
  imageUpload,
  storeThisEmoployeeId,
} from "@/app/redux/slices/employeeSlice";
import {
  getGender,
  getMaritalStatus,
  getAllCountry,
} from "@/app/redux/slices/basicSlices";
import Label from "@/app/components/label/Label";
import Input from "@/app/components/input/Input";
import Select from "@/app/components/select/Select";
import Textarea from "@/app/components/textarea/Textarea";
import Button from "@/app/components/button/Button";
import Loading from "@/app/components/loading/Loading";
import noImage from "../../assets/img/people/no-image.jpg";
import Progressbar from "@/app/components/progressbar/Progressbar";

// const _mark = false;
// const black = true;

const re = /^(01[3-9])\d{8}$/;
var _email =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //01768998098

export default function BasicInfo() {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [createObjectURL, setCreateObjectURL] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [personalMobileError, setPersonalMobileError] = useState(false);
  const [workMobileError, setWorkMobileError] = useState(false);
  const [personalEmailError, setPersonalEmailError] = useState(false);
  const [officeEMailError, setOfficeEMailError] = useState(false);
  const [nidError, setNidError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [gender, setGender] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState([]);
  const [country, setCountry] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("");
  const [selectedEthnicity, setSelectedEthnicity] = useState("");
  const [isPortalAccessEnabled, setIsPortalAccessEnabled] = useState(false);
  const [isUserStatutory, setIsUserStatutory] = useState(false);
  const [errorMsg,setErrorMsg] = useState("")
  const [userField, setUserField] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    nid: "",
    presentAddress: "",
    permanentAddress: "",
    personalContactNo: "",
    workContactNo: "",
    personalEmail: "",
    officeEMail: "",
  });

  const getHood = () => {
    console.log("=====hood=====")
    let i;
    setTimeout(() => setCompleted(10), 1000);
    setTimeout(() => setCompleted(20), 2000);
    setTimeout(() => setCompleted(40), 3000);
    setTimeout(() => setCompleted(80), 5000);
    setTimeout(() => setCompleted(95), 6500);
    setTimeout(() => setCompleted(100), 8500);
    // for(i=0;i<100 ; i++){
    //   setTimeout(() => setCompleted(i), 1000 );
    //   i = i<=90 && i+10*Math.random() <= 100 && i*Math.random()
    // }
  }



  const changeUserFieldHandler = (e) => {
    // console.log(e.target.value);

    const { name, value } = e.target;
    const test = re.test(value);
    if (name == "personalEmail") {
      if (value.match(_email)) setPersonalEmailError(false);
      else setPersonalEmailError(true);
    }
    if (name == "officeEMail") {
      if (value.match(_email)) setOfficeEMailError(false);
      else setOfficeEMailError(true);
    }
    if (name == "personalContactNo") {
      if (test) {
        setPersonalMobileError(false);
      } else {
        setPersonalMobileError(true);
      }
    }
    if (name == "workContactNo") {
      if (test) {
        setWorkMobileError(false);
      } else {
        setWorkMobileError(true);
      }
    }
    if (name == "nid") {
      setNidError(false);

    }
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getAllCountry()).then(function (e) {
      e.payload && e.payload.success
        ? setCountry(e.payload.payload[0])
        : setCountry([]);
    });
    dispatch(getGender()).then(function (e) {
      e.payload && e.payload.success
        ? setGender(e.payload.payload[0])
        : setGender([]);
    });
    dispatch(getMaritalStatus()).then(function (e) {
      e.payload && e.payload.success
        ? setMaritalStatus(e.payload.payload[0])
        : setMaritalStatus([]);
    });
  }, [dispatch]);

  const handleChange = (event) => {
    console.log(event.target.files);
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const _uploadImage = () => {
    setErrorMsg("")
    setCompleted(0)
    setLoading(true);
    if (image != "") {
      setLoading(true);
      const body = new FormData();
      body.append("file", image);

      dispatch(imageUpload(body)).then(function (e) {

        e.payload ? (
          console.log("success"),
          getHood(),
          setImagePath(e.payload.payload[0]),
          setTimeout(() => {
            setLoading(false);
          }, 10000)
        )  :
        (
          setErrorMsg("Network error")
        )
      }); 
    }
  };



  const _getGender = (e) => {
    console.log(e.target.value);
    const _val = e.target.value;
    setSelectedGender(e.target.value);
  };

  const _getMaritalStatus = (e) => {
    console.log(e.target.value);
    const _val = e.target.value;
    setSelectedMaritalStatus(e.target.value);
  };

  const _getEthnicity = (e) => {
    console.log(e.target.value);
    const _val = e.target.value;
    setSelectedEthnicity(e.target.value);
  };

  const _getPortalAccess = (e) => {
    console.log(e.target.checked);
  };

  const _getUserStatutory = (e) => {
    console.log(e.target.value);
    setIsUserStatutory(e.target.value);
  };

  const _submit = () => {
    setIsSubmit(true);

    const isEmpty =
      userField.firstName == "" ||
      userField.lastName == "" ||
      userField.dateOfBirth == "" ||
      userField.nid == "" ||
      userField.presentAddress == "" ||
      userField.permanentAddress == "" ||
      userField.personalContactNo == "" ||
      userField.workContactNo == "" ||
      userField.personalEmail == "" ||
      userField.officeEMail == "" ||
      personalMobileError ||
      workMobileError ||
      personalEmailError ||
      officeEMailError ||
      nidError ||
      imagePath == "";

    if (!isEmpty) {
      let options = {
        firstName: userField.firstName,
        middleName: userField.middleName,
        lastName: userField.lastName,
        gender: parseInt(selectedGender),
        maritalStatus: parseInt(selectedMaritalStatus),
        country: parseInt(selectedEthnicity),
        dateOfBirth: userField.dateOfBirth,
        nid: userField.nid,
        presentAddress: userField.presentAddress,
        permanentAddress: userField.permanentAddress,
        personalContactNo: userField.personalContactNo,
        workContactNo: userField.workContactNo,
        personalEmail: userField.personalEmail,
        officeEMail: userField.officeEMail,
        isPortalAccessEnabled: isPortalAccessEnabled,
        isUserStatutory: isUserStatutory,
        profilePictureURL: imagePath,
      };

      let name =
        options.firstName + " " + options.middleName + "" + options.lastName;
      console.log(options);
      dispatch(postEmployeeBasicInfo(options)).then(function (e) {
        if (e.payload && e.payload.success) {
          // console.log(e.payload.payload[0])
          dispatch(storeThisEmoployeeId([e.payload.payload[0], name]));
          dispatch(changeEmployeeRoll([0, true]));
        }
      });
    } else {
      setLoading(false);
      // setError(true);
      setErrorMsg("Please Select All Required Fields");
    }
  };

  // console.log(createObjectURL)
  return (
    <div>
      {/* image */}
      <div className="row">
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div
          className="col-8"
          style={{
            marginBottom: 20,
            display: "flex",
          }}
        >

          <div className="row">
            <div className="col-3" style={{ backgroundColor: "" }}>

              <Image
                src={createObjectURL === "" ? noImage : createObjectURL}
                width={150}
                height={150}
                alt=""
                style={{
                  marginBottom: 10,
                  backgroundColor: "",
                  borderRadius: 10,
                  padding: 2,
                  border: "1px solid gray",
                }}
              />
              <Input
                type="file"
                placeholder="Upload Image"
                onChange={handleChange}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  border: "1px solid #555",
                  height: 40,
                }}
              />
            </div>
            <div className="col-8" style={{ backgroundColor: "" }}>

              <div>
                <div
                  className="text-md font-weight-normal"
                  style={styles.bobyInnerRow}
                >
                  Employee Photo
                </div>
                <div className="text-xs ">
                  This photo will be visible to all the users of the application
                </div>
                <div className="text-xs ">
                  (Please upload a clear, recent photo of the employee. File
                  size should not exceed 5 megabytes)
                </div>

                <div
                  style={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    class="btn btn-primary"
                    text="Upload"
                    onclick={_uploadImage}
                  />



                  {imagePath != "" ? (
                    <div
                      className="text-xs"
                      style={{
                        // backgroundColor : '#b0c298',
                        color: "green",
                        letterSpacing: 0.5,
                        padding: 5,
                        borderRadius: 5,
                      }}
                    >

                      {
                        loading && (
                          <>
                          <div className="text-xs">{errorMsg}</div>
                        <Progressbar completed={completed} />
                        </>
                        )
                      }


                      {!loading && <span>Image Uploaded </span>}
                    </div>
                  ) : (
                    isSubmit &&
                    imagePath == "" && (
                      <div className="text-xs" style={{ color: "red" }}>
                        No image is uploaded **
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* basic info title */}
      <div className="row">
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div className="col-md-2" style={{ backgroundColor: "" }}>
          <div
            className="text-md font-weight-normal"
            style={styles.bobyInnerRow}
          >
            Personal Details
          </div>
        </div>
      </div>
      {/* name */}
      <div className="row" style={styles.bobyInnerRow}>
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div className="col-md-6" style={{ backgroundColor: "" }}>
          <Label title="Employee Name" required />
          <div className="row">
            <div className="col-md-4">
              <Input
                style={{
                  border:
                    isSubmit && userField.firstName == "" && "1px solid pink",
                }}
                placeholder="First name *"
                name="firstName"
                onChange={(e) => changeUserFieldHandler(e)}
                autofocus
              />
            </div>
            <div className="col-md-4">
              <Input
                // ref={middleNameInput}
                placeholder="Middle name"
                name="middleName"
                autofocus={isSubmit ? true : false}
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div className="col-md-4">
              <Input
                style={{
                  border:
                    isSubmit && userField.lastName == "" && "1px solid pink",
                }}
                value={userField.lastName}
                placeholder="Last name *"
                name="lastName"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* 2nd column */}
      <div className="row" style={styles.bobyInnerRow}>
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div className="col-md-6" style={{ backgroundColor: "" }}>
          <div className="row">
            <div className="col-md-4">
              <Label title="Date Of Birth" required />
              <Input
                style={{
                  border:
                    isSubmit && userField.dateOfBirth == "" && "1px solid pink",
                }}
                value={userField.dateOfBirth}
                type="date"
                placeholder=""
                name="dateOfBirth"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div className="col-md-4">
              <Label title="Gender" required />
              <Select
                style={{
                  border: isSubmit && selectedGender == "" && "1px solid pink",
                }}
                placement
                data={gender}
                onchange={_getGender}
              />
            </div>
            <div className="col-md-4">
              <Label title="Marital Status" required />
              <Select
                placement
                style={{
                  border:
                    isSubmit && selectedMaritalStatus == "" && "1px solid pink",
                }}
                data={maritalStatus}
                onchange={_getMaritalStatus}
              />
            </div>
          </div>
        </div>
      </div>
      {/* 3rd column */}
      <div className="row" style={styles.bobyInnerRow}>
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div className="col-md-6" style={{ backgroundColor: "" }}>
          <div className="row">
            <div className="col-md-4">
              <Label title="Ethnicity" required />
              <Select
                style={{
                  border:
                    isSubmit && selectedEthnicity == "" && "1px solid pink",
                }}
                placement
                data={country}
                onchange={_getEthnicity}
              />
            </div>
            <div className="col-md-4">
              <Label title="NID" required />
              <Input
                // type="number"
                style={{
                  border:
                    ((isSubmit && userField.nid == "") || nidError) &&
                    "1px solid pink",
                }}
                placeholder="nid"
                name="nid"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* 2nd row */}
      <div className="row">
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div className="col-md-2" style={{ backgroundColor: "" }}>
          <div
            className="text-md font-weight-normal"
            style={styles.bobyInnerRow}
          >
            Contact Details
          </div>
        </div>
      </div>
      <div className="row" style={styles.bobyInnerRow2}>
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div className="col-md-6" style={{ backgroundColor: "" }}>
          <Label title="Address (Current)" />
          <Textarea
            name="presentAddress"
            style={{
              border:
                isSubmit && userField.presentAddress == "" && "1px solid pink",
            }}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
      </div>
      <div className="row" style={styles.bobyInnerRow5}>
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div className="col-md-6" style={{ backgroundColor: "" }}>
          <Label required title="Address (Permanent)" />
          <Textarea
            style={{
              border:
                isSubmit &&
                userField.permanentAddress == "" &&
                "1px solid pink",
            }}
            name="permanentAddress"
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
      </div>
      <div className="row" style={styles.bobyInnerRow}>
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div className="col-md-6">
          <div className="text-md ">Contact Number </div>

          <div className="row">
            <div className="col-md-6">
              <Label title="Personal" required />
              <Input
                style={{
                  border:
                    ((isSubmit && userField.personalContactNo == "") ||
                      personalMobileError) &&
                    "1px solid pink",
                }}
                type="text"
                value={userField.personalContactNo}
                placeholder=""
                name="personalContactNo"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div className="col-md-6">
              <Label title="Work" required />
              <Input
                style={{
                  border:
                    ((isSubmit && userField.workContactNo == "") ||
                      workMobileError) &&
                    "1px solid pink",
                }}
                value={userField.workContactNo}
                type="text"
                placeholder=""
                name="workContactNo"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={styles.bobyInnerRow}>
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div className="col-md-6">
          <div className="text-md">Email </div>

          <div className="row">
            <div className="col-md-6">
              <Label title="Personal" required />
              <Input
                style={{
                  border:
                    ((isSubmit && userField.personalEmail == "") ||
                      personalEmailError) &&
                    "1px solid pink",
                }}
                type="email"
                placeholder=""
                name="personalEmail"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div className="col-md-6">
              <Label title="Work" required />
              <Input
                style={{
                  border:
                    ((isSubmit && userField.officeEMail == "") ||
                      officeEMailError) &&
                    "2px solid pink",
                }}
                type="email"
                placeholder=""
                name="officeEMail"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={styles.bobyInnerRow}>
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div className="col-md-6" style={{ backgroundColor: "" }}>
          <div className="form-check" style={{ marginTop: 10 }}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => _getPortalAccess(e)}
            />
            {/* <Input type="checkbox" /> */}
            <label
              className="form-check-label text-md"
              htmlFor="flexCheckDefault"
            >
              Enable Portal Access
            </label>
            <div className="text-xs">
              The employee will be able to view payslips and social security
              benefit details through the employee portal.
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={styles.bobyInnerRow}>
        <div className="col-md-2" style={{ backgroundColor: "" }}></div>
        <div
          className="col-md-6"
          style={{ backgroundColor: "", marginTop: 10 }}
        >
          <div>
            <Label title="Statutory Details" />
            <div className="text-xs">
              Let us know the employee nationality to enable applicable
              statutory. &nbsp;
              <br />
              <div className="text-xs form-text">
                {" "}
                Is this employee a GCC National?
              </div>
            </div>
            <div style={styles.radioGroup}>
              <div style={styles.radioBranch} className="bg-muted">
                <div className="form-check" style={styles.radio}>
                  <input
                    className="form-check-input"
                    name="radio"
                    type="radio"
                    value={true}
                    id="defaultCheck1"
                    onClick={_getUserStatutory}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Yes
                  </label>
                </div>
              </div>
              &nbsp;
              <div style={styles.radioBranch}>
                <div className="form-check" style={{ margin: 5, padding: 10 }}>
                  <input
                    className="form-check-input"
                    name="radio"
                    type="radio"
                    value={false}
                    id="defaultCheck1"
                    onClick={_getUserStatutory}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          {/* {
            loading &&
            <Loading />
          }
          {
            error && 
            <div>
           <div style={{color:'pink'}} ><i className="fas fa-bug fa-2x " ></i></div>
           <div className="text-table">{errorMsg}</div>
           </div>
          } */}
        </div>
      </div>

      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-md-2"></div>
        <div className="col-md-10" style={styles.buttonGroup}>
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
  );
}
