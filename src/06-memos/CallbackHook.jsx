import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    
    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      () => {
        setCounter( (current) => current + 1  );
      },
      [],
    )
    
    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        <>
            <h1>useCallbackHook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementFather } />

        </>
    )
}
