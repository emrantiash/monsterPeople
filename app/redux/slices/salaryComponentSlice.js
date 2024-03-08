import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '@/app/utils/path/Path';
import { customget ,post } from '@/app/utils/query/Query';


export const getEmployee = createAsyncThunk('get-employee', async (data) => {
  try {
    const response = await customget(Endpoint.getEmployee, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }

})



const initialStateValues = {

  active : "",
  index : 0 
}

export const salaryComponentSlice = createSlice({
  name: 'login',
  initialState: initialStateValues,
  reducers: {
    getActive : (state) =>{
      state.active = "nav-link active"
      state.index = state.index
    },
    setThisIndex : (state,action) =>{
        state.active = state.active ,
        state.index = action.payload
      },
  },
  
})

// Action creators are generated for each case reducer function
// export const { setlogin } = loginSlice.actions

export const { getActive ,setThisIndex} = salaryComponentSlice.actions

export default salaryComponentSlice.reducer