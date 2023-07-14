import React from 'react';
const Delete =(props)=>{
    return(
        <>
            <div className="delete">
                <button onClick={()=>{props.onDelete()}}><img src="delete_logo.svg"/></button>
            </div>
        </>
    );
}
export default Delete;
