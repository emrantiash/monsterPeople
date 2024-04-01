import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Endpoint from "@/app/utils/path/Path";
import { get, customget, post ,put } from "@/app/utils/query/Query";


export const getBank = createAsyncThunk('get-bank', async (data) => {
  try {
    const response = await get(Endpoint.getBankList, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const postBank = createAsyncThunk('post-bank', async (data) => {
  try {
    const response = await post(Endpoint.addBank, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const updateBank = createAsyncThunk('update-bank', async (data) => {
  try {
    const response = await put(Endpoint.updateBank, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})



const initialStateValues = {
  isLoading: false,
  data: [],
};

export const bankSlice = createSlice({
  name: "bank",
  initialState: initialStateValues,


  extraReducers: (builder) => {
    builder.addCase(getBank.pending, (state, action) => {
      state.isLoading = true
    });
  
    builder.addCase(getBank.fulfilled, (state, action) => {
        state.isLoading = false,
        state.data = (action.payload.payload[0])
        
    });
  
    builder.addCase(getBank.rejected, (state, action) => {
      state.isLoading = false
     
    });
  }
});



// Action creators are generated for each case reducer function
// export const { saveDocument, getActionType } = locationSlice.actions;

export default bankSlice.reducer;