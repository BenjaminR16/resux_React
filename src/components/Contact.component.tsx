import { useSelector, useDispatch } from "react-redux";
import { sumar, restar, reset } from "../redux";
import type { RootState } from "../store"

export default function Contact() {
    const contador = useSelector((state: RootState) => state.contador.value);
    const distpatch = useDispatch()
    return (
        <>
            <h2>Contact</h2>
            <p>Contador: {contador}</p>
            <button onClick={() => distpatch(sumar())}>Sumar</button>
            <button onClick={() => distpatch(reset())}>Reiniciar</button>
            <button onClick={() => distpatch(restar())}>Restar</button>

        </>
    )
}