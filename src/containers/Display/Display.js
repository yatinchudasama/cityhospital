import React, { useEffect } from 'react';

function Display(props) {

    useEffect(()=>{
        let local = localStorage.getItem("data");
        console.log(local);
    },[])
    return (
        <div>
            {/* {
                local.map((v) =>{
                
                    {v.name}
                    {v.email}
                })
            } */}
        </div>
    );
}

export default Display;