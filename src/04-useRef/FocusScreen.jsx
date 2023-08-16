import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={ inputRef } 
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <input
                type="text"
                placeholder="Ingrese su apellido"
                className="form-control mt-2"
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={ onClick }>
                Set focus
            </button>
        </>
    )
}
