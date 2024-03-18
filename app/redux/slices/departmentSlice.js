import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '@/app/utils/path/Path';
import { get ,post } from '@/app/utils/query/Query';


export const getDepartmentList = createAsyncThunk('get-department', async (data) => {
  try {
    const response = await get(Endpoint.getDepartment, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const createDepartment = createAsyncThunk('create-department', async (data) => {
    try {
      const response = await post(Endpoint.createDepartment, data)
      return response.data
    }
    catch (error) {
      return error.response.data
    }
  })

export const updateDepartment = createAsyncThunk('update-department', async (data) => {
    try {
      const response = await post(Endpoint.updateDepartment, data)
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

export const departmentSlice = createSlice({
  name: 'department',
  initialState: initialStateValues,

  reducers: {
    // getDepartment: (state,action) => {
    //     state.selectedDivision = action.payload
    //  state.department = (state.data.filter(item => item.divisionId == action.payload))
    // }
},
  
  
})



 export const {  } = departmentSlice.actions

export default departmentSlice.reducer


function makeTheData(data){
    console.log(data)
    let arr = []
    data.map((data, index) =>
        arr.push(
            {
                id: data.divisionId,
                name: data.divisionName
            }
        )
    )
    return arr;
}