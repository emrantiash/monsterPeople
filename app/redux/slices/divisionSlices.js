import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '@/app/utils/path/Path';
import { get ,post } from '@/app/utils/query/Query';
import { Inactive } from "@/app/utils/constant/inactive";

export const getDivision = createAsyncThunk('get-division', async (data) => {
  try {
    const response = await get(Endpoint.devisionWithDepartment, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const getOnlyDivision = createAsyncThunk('get-only-division', async (data) => {
  try {
    const response = await get(Endpoint.getDivisionList, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})
export const getOnlyTrueDivision = createAsyncThunk('get-only-true-division', async (data) => {
  try {
    const response = await get(Endpoint.getDivisionListOnlyTrue, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const createDivision = createAsyncThunk('create-division', async (data) => {
  try {
    const response = await post(Endpoint.createDivision, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const updateDivision = createAsyncThunk('update-division', async (data) => {
  try {
    const response = await post(Endpoint.updateDivision, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

const initialStateValues = {
  isError : false ,
  success: false,
  data: [],
  division : [],
  selectedDivision : 0,
  department : []
}

export const divisionSlice = createSlice({
  name: 'division',
  initialState: initialStateValues,

  reducers: {
    getDepartment: (state,action) => {
        state.selectedDivision = action.payload
     state.department = (state.data.filter(item => item.divisionId == action.payload))
    }
},
  
  extraReducers: (builder) => {
    builder.addCase(getDivision.pending, (state, action) => {
      state.isLoading = true
    });

    builder.addCase(getDivision.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isError = false,
        state.data = action.payload.payload &&  action.payload.payload[0],
        state.division = makeTheData(action.payload.payload[0])
        
    });

    builder.addCase(getDivision.rejected, (state, action) => {
      state.isError = true,
      state.isLoading = false
     
    });

    builder.addCase(getOnlyDivision.pending, (state, action) => {
      state.isLoading = true
    });

    builder.addCase(getOnlyDivision.fulfilled, (state, action) => {
        state.isLoading = false,
        state.division = (action.payload.payload[0])
        
    });

    builder.addCase(getOnlyDivision.rejected, (state, action) => {
      state.isError = true,
      state.isLoading = false
     
    });


  }

  
})



 export const { getDepartment } = divisionSlice.actions

export default divisionSlice.reducer


function makeTheData(data){
    let arr = []
    data.map((data, index) =>
        arr.push(
            {
              id: data.divisionId,
             name : data.divisionName
            }
        )
    )
    return arr;
}