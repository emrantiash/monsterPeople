import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from "@/app/utils/path/Path";
import { customget, get, post } from "@/app/utils/query/Query";

export const getEmployee = createAsyncThunk("get-employee", async (data) => {
  try {
    const response = await get(Endpoint.getEmployee, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const getDesignationList = createAsyncThunk("get-employee-designation", async () => {
  try {
    const response = await get(Endpoint.designationList);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const postEmployeeBasicInfo = createAsyncThunk("post-employee-basic", async (data) => {
  try {
    const response = await post(Endpoint.postEmployeeBasicInfo, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const imageUpload = createAsyncThunk("upload-image", async (data) => {
  try {
    const response = await post(Endpoint.imageUpload, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const postEmployeeJobDetails = createAsyncThunk("post-employee-job", async (data) => {
  try {
    const response = await post(Endpoint.postEmployeeJobDetails, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const uploadDocumentImage = createAsyncThunk('upload-employees-docs-image', async (data) => {
  try {
    const response = await post(Endpoint.uploadDocument, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const uploadDocumentInfo = createAsyncThunk('upload-employees-docs-info', async (data) => {
  try {
    const response = await post(Endpoint.uploadDocumentInfo, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})




const initialStateValues = {
  data: [],
  errro: false,
  isLoading: false,
  _value: [false, false, false, false, false],
  empStatus: [false, false, false, false, false],
  edit: false,
  thisEmployeeId : 0,
  thisEmployeeName : ""
  // employee: [
  //   {
  //     id: 1,
  //     name: "Jacson",
  //   },
  // ],
};

export const employeeSlice = createSlice({
  name: "login",
  initialState: initialStateValues,
  reducers: {
    getAllEmployee: (state) => {
      state.employee = [
        {
          id: 1,
          name: "Jacson",
        },
      ];
    },
    changeEditStatus: (state, action) => {
      state.edit = action.payload;
    },
    getEmployeeRoll: (state, action) => {
      state.empStatus = state.edit
        ? state.empStatus
        : [
            action.payload[0],
            action.payload[1],
            action.payload[2],
            action.payload[3],
            action.payload[4],
          ];
    },
    changeEmployeeRoll: (state, action) => {
      state.empStatus[action.payload[0]] = action.payload[1];
    },
    storeThisEmoployeeId: (state, action) => {
      console.log(action.payload)
      state.thisEmployeeId = action.payload[0],
      state.thisEmployeeName = action.payload[1]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployee.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getEmployee.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.data = action.payload.payload[0]);
    });

    builder.addCase(getEmployee.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { setlogin } = loginSlice.actions

export const {
  changeEditStatus,
  getAllEmployee,
  getEmployeeRoll,
  changeEmployeeRoll,
  storeThisEmoployeeId
} = employeeSlice.actions;

export default employeeSlice.reducer;
