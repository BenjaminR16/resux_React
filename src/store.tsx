import { configureStore } from "@reduxjs/toolkit"
import contadorReducer from "./redux"

//estp importamos al main.tsx para usarlo en todo lado y ver que la variable cambia en vivo
export const store = configureStore({
    reducer: {
        contador: contadorReducer
    }
})

//se importa en el componente 
export type RootState = ReturnType<typeof store.getState> 