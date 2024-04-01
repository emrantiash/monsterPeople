import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Endpoint from "@/app/utils/path/Path";
import { get, customget, post ,put } from "@/app/utils/query/Query";
import { Inactive } from "@/app/utils/constant/inactive";


export const getEmploymentTypeDetails = createAsyncThunk("get-employee-type-details", async () => {
  try {
    const response = await get(Endpoint.getEmployeeType);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const createEmploymentType = createAsyncThunk("create-employee-type", async (data) => {
  try {
    const response = await post(Endpoint.createEmploymentType,data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const updateEmploymentType = createAsyncThunk("update-employement-type", async (data) => {
  try {
    const response = await put(Endpoint.updateEmploymentType,data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});



const initialStateValues = {
  isLoading: false,
  employmentType : [],
};

export const employementSlice = createSlice({
  name: "employement",
  initialState: initialStateValues,
 
  extraReducers: (builder) => {
    builder.addCase(getEmploymentTypeDetails.pending, (state, action) => {
      state.isLoading = true
    });

    builder.addCase(getEmploymentTypeDetails.fulfilled, (state, action) => {
      state.isLoading = false,
        state.employmentType = makeTheData(action.payload.payload[0])
        
    });

    builder.addCase(getEmploymentTypeDetails.rejected, (state, action) => {
     
      state.isLoading = false
     
    });
 }
});

// Action creators are generated for each case reducer function
// export const { saveDocument, getActionType } = employementSlice.actions;

export default employementSlice.reducer;

function makeTheData(data) {
    let arr = [];
    data.map((data, index) =>
      arr.push({
        id: data.id,
        name: data.name,
        count: data.totalCount,
        active : data.status == "Active" ? "Active" : Inactive.inactive,
      })
    );
    return arr;
  }
