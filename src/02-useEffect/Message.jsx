import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {

        const onMouseMove = ( {x, y} ) => {
            const coords = { x, y };
            console.log(coords);
        }
      
        window.addEventListener( 'mousemove', onMouseMove) 
    
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove)
        console.log('Message Unmounted');
      }
    }, [])
    
    return (
        <>
            <h3>El usuario ya existe</h3>
        </>
    )
}
