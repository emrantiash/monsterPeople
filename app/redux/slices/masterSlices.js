import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Endpoint from "@/app/utils/path/Path";
import { get, customget, post } from "@/app/utils/query/Query";


// export const uploadDocument = createAsyncThunk('upload-doc', async (data) => {
//   try {
//     const response = await post(Endpoint.uploadDocument, data)
//     return response.data
//   }
//   catch (error) {
//     return error.response.data
//   }
// })





const initialStateValues = {
  isLoading: false,
  document: "",
  action: "Add",
  data: [],
};

export const masterSlice = createSlice({
  name: "master",
  initialState: initialStateValues,
  reducers: {
    saveDocument: (state, action) => {
      state.document = action.payload;
    },
    getActionType: (state, action) => {
      state.action = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveDocument, getActionType } = masterSlice.actions;

export default masterSlice.reducer;
