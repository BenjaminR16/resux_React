import { useSelector, useDispatch } from "react-redux";
import { sumar, restar, reset } from "../redux";
import type { RootState } from "../store"


export default function Home() {
    //es para guardar el estado del contador para cuando te vas a otro component
    const contador = useSelector((state: RootState) => state.contador.value)
    //envia o despacha acciones que estan en el storage => distpatch(sumar())
    const distpatch = useDispatch()
    return (
        <>
            <h2>Home</h2>
            <p>Contador: {contador}</p>
            <button onClick={() => distpatch(sumar())}>Sumar</button>
            <button onClick={() => distpatch(reset())}>Reiniciar</button>
            <button onClick={() => distpatch(restar())}>Restar</button>

        </>
    )
}