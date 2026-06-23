import { createSlice } from '@reduxjs/toolkit'

interface counter {
    value: number
}

const initialState: counter = { value: 0 }

const contadorSlice = createSlice({
    name: "contador", //nombre usado los componentes
    initialState,
    reducers: {
        sumar: (state) => {
            state.value += 1
        },
        restar: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = initialState.value
        }
    }
})

export const { sumar, restar, reset } = contadorSlice.actions //este es el que importo en los componentes
export default contadorSlice.reducer //este importo en mi store 