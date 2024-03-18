const Endpoint = {
  login: ["login"],
  gender: ["static-info/get-gender-list"],
  maritalStatus: ["static-info/get-marital-status-list"],
  getCountry: ["static-info/get-country-list"],
  getEmployeeType : ['static-info/get-employee-type-list'],
  getWorkLocation : ['static-info/get-job-work-location-list'],
  getEmployee: ["employee/employee-list"],
  postEmployeeBasicInfo: ["employee/insert-employee-basic-info"],
  postEmployeeJobDetails: ["employee/insert-employee-job-details"],
  // postEmployeeJobDetailsInfo : [''],
  imageUpload: ["file-util/upload-profile-picture"],
  designationList : ["designation/get-designation-list"],
  devisionWithDepartment : ['division/get-division-list-with-departments'],

  //  master 
  createEmploymentType : ['static-info/create-employee-type'],
  updateEmploymentType : ['static-info/update-employee-type'],
  getDivisionList : ['division/get-division-list'],
  getDivisionListOnlyTrue : ['division/get-division-list?isActiveOnly=true'],
  createDivision : ['division/create-division'],
  updateDivision : ['division/update-division'],
  getDepartment : ['department/get-department-list'],
  createDepartment : ['department/create-department'],
  updateDepartment : ['department/update-department'],
  uploadDocument : ['file-utill/upload-employee-document']
};

export default Endpoint;
