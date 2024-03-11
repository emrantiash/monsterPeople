const Endpoint = {
  login: ["login"],
  gender: ["static-info/get-gender-list"],
  maritalStatus: ["static-info/get-marital-status-list"],
  getCountry: ["static-info/get-country-list"],
  getEmployeeType : ['static-info/get-employee-type-list'],
  getWorkLocation : ['static-info/get-job-work-location-list'],
  getEmployee: ["employee/employee-list"],
  postEmployeeBasicInfo: ["employee/insert-employee-basic-info"],
  // postEmployeeJobDetailsInfo : [''],
  imageUpload: ["file-util/upload-profile-picture"],
  designationList : ["designation/get-designation-list"],
  devisionWithDepartment : ['department/get-division-list-with-departments']
};

export default Endpoint;
