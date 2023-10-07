import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Review(props) {
    const [rData, setRData] = useState([])
    const { id } = useParams()
    const getdata = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments');
        let data = await response.json()

        // console.log(data);

        let fData = data.filter((v) => v.id == id)
        setRData(fData[0])
    }
    useEffect(() => {
        getdata();
    }, [])
    // console.log(rData);


    // data.filter((v) => v.id === id)
    return (
        <div>
            {rData ?
                <>
                    <h1> {id}</h1>
                    <h2>{rData.name}</h2>
                </>
                : null}

        </div>

    );
}

export default Review;