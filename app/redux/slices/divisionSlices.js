// import cookieCutter from 'cookie-cutter';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '@/app/utils/path/Path';
import { get } from '@/app/utils/query/Query';
// const CryptoJS = require("crypto-js");

export const getDivision = createAsyncThunk('get-division', async (data) => {
  try {
    const response = await get(Endpoint.devisionWithDepartment, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }

}

)

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
        console.log(action.payload)
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
        state.data = action.payload.payload[0],
        state.division = makeTheData(action.payload.payload[0])
        
    });

    builder.addCase(getDivision.rejected, (state, action) => {
      state.isError = true,
      state.isLoading = false
     
    });

  }
})



 export const { getDepartment } = divisionSlice.actions

export default divisionSlice.reducer


// function makeDepartmentList(data){
//     // const data =  data

//     console.log(data)
//     let arr = []
//     data.map((data, index) =>{
//         console
//         arr.push(
//             {
//                 id: data.id,
//                 name: data.name
//             }
//         )

//     }
        
//     )
//     return arr;
// }

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