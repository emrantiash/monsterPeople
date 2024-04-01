import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '@/app/utils/path/Path';
import { get ,post ,customget} from '@/app/utils/query/Query';


export const getDesignation = createAsyncThunk('get-designation', async (data) => {
  try {
    const response = await customget(Endpoint.getDesignation, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const createDesignation = createAsyncThunk('create-designation', async (data) => {
  try {
    const response = await post(Endpoint.createDesignation, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const updateDesignation = createAsyncThunk('update-designation', async (data) => {
  try {
    const response = await post(Endpoint.updateDesignation, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})


const initialStateValues = {
  isLoading : false ,
  data: [],
  designation : [],
  thisdesig : ""
}

export const designationSlice = createSlice({
  name: 'designation',
  initialState: initialStateValues,

  reducers: {
    thisDesignation: (state,action) => {
      state.thisdesig = action.payload
    }
},
  
  extraReducers: (builder) => {
    builder.addCase(getDesignation.pending, (state, action) => {
      state.isLoading = true
    });

    builder.addCase(getDesignation.fulfilled, (state, action) => {
        state.isLoading = false,
        state.designation = (action.payload.payload[0])
        
    });

    builder.addCase(getDesignation.rejected, (state, action) => {
      state.isError = true,
      state.isLoading = false
     
    });

  }
})



 export const { thisDesignation } = designationSlice.actions

export default designationSlice.reducer


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