import { createSlice } from "@reduxjs/toolkit";
import demarkeCore from "../demarke-core";
const axios = require('axios');


const init = async () => {
    demarkeCore.initApi(axios)
}
init()

export const demarkeCoreSlice = createSlice({
    name: 'demarkeCore',
    initialState: {
        value: demarkeCore
    },
    reducers: {
    }
})

export default demarkeCoreSlice.reducer