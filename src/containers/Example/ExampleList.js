import React, { useEffect, useState } from 'react';

function ExampleList( {exData} ) {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log('yyyyyyyy');
        setData(exData(50))
    },[exData])

    
    return (
        <div>
            {
                data.map((v) => {
                    return(
                        <p>{v}</p>
                    )
                })
            }
        </div>
    );
}

export default ExampleList;