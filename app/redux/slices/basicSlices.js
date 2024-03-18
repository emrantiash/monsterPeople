import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Endpoint from '@/app/utils/path/Path';
import { get ,customget ,post } from '@/app/utils/query/Query';


export const getGender = createAsyncThunk('get-gender', async () => {
  try {
    const response = await get(Endpoint.gender)
    return response.data
  }
  catch (error) {
    return error.response.data
  }

})

export const getMaritalStatus = createAsyncThunk('get-married-ststus', async () => {
    try {
      const response = await get(Endpoint.maritalStatus)
      return response.data
    }
    catch (error) {
      return error.response.data
    }
  
  })

  export const getAllCountry = createAsyncThunk('get-country-list', async () => {
    try {
      const response = await get(Endpoint.getCountry)
      return response.data
    }
    catch (error) {
      return error.response.data
    }
  
  })

  export const getEmployeeType = createAsyncThunk("get-employee-type", async () => {
    try {
      const response = await get(Endpoint.getEmployeeType);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  });

  export const getWorkLocation = createAsyncThunk("get-work-location", async () => {
    try {
      const response = await get(Endpoint.getWorkLocation);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  });

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

  export const updateEmploymentType = createAsyncThunk("update-employee-type", async (data) => {
    try {
      const response = await post(Endpoint.updateEmploymentType,data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  });
  

const initialStateValues = {
  isLoading : false ,
  employmentType : [],
  data : []

}

export const basicSlice = createSlice({
  name: 'basic',
  initialState: initialStateValues,
  reducers: {
    action1 : (state, action) => {
     
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getEmploymentTypeDetails.pending, (state, action) => {
  //     state.isLoading = true
  //   });

  //   builder.addCase(getEmploymentTypeDetails.fulfilled, (state, action) => {
  //       state.employmentType = makeTheData(action.payload.payload[0])
        
  //   });

  //   builder.addCase(getEmploymentTypeDetails.rejected, (state, action) => {
     
  //     state.isLoading = false
     
  //   });

  

  // }
})

// Action creators are generated for each case reducer function
export const { action1 } = basicSlice.actions

export default basicSlice.reducer

function makeTheData(data){
  console.log(data)
  let arr = []
  data.map((data, index) =>
      arr.push(
          {
              id: data.id,
              name: data.name,
              count : data.totalCount,
              status: data.status
    
              // action : data.name == "Intern" ? "Edit" : "Edit"
          }
      )
  )
  return arr;
}