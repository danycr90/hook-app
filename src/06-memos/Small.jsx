// import { memo } from "react";
import React from "react";

// export const Small = memo(({ value }) => {
export const Small = React.memo(({ value }) => {

    console.log('Regenerando Small component');
    
    return (
        <small>{ value }</small>
    )
})