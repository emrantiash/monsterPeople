import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Endpoint from "@/app/utils/path/Path";
import { get, customget, post,put } from "@/app/utils/query/Query";

export const getLocation = createAsyncThunk('upload-doc', async (data) => {
  try {
    const response = await customget(Endpoint.getLocation, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})


export const addLocation = createAsyncThunk('add-location', async (data) => {
  try {
    const response = await post(Endpoint.addLocation, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const updateLocation = createAsyncThunk('upload-location', async (data) => {
  try {
    const response = await put(Endpoint.updateLocation, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})



const initialStateValues = {
  isLoading: false,
  document: "",
  action: "Add",
  data: [],
};

export const locationSlice = createSlice({
  name: "location",
  initialState: initialStateValues
});

// Action creators are generated for each case reducer function
// export const { saveDocument, getActionType } = locationSlice.actions;

export default locationSlice.reducer;