import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Endpoint from '@/app/utils/path/Path';
import { get ,customget ,post ,put} from '@/app/utils/query/Query';


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

  export const getAllCity= createAsyncThunk('get-city-list', async (data) => {
    try {
      const response = await customget(Endpoint.getCity,data)
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

 
  

const initialStateValues = {
  isLoading : false ,
  data : []

}

export const basicSlice = createSlice({
  name: 'basic',
  initialState: initialStateValues,
  reducers: {
    action1 : (state, action) => {
     
    }
  }
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