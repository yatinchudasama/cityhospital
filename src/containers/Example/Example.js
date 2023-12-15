// import React, { useEffect, useRef, useState } from 'react';

// function Example(props) {

//     const [name, setName] = useState('')
//     const [count, setCount] = useState('')

//     const nameRef = useRef('')

//     const rendercount = useRef('')

//     const prevRef = useRef('')

//     useEffect(() => {
//         rendercount.current = rendercount.current +1;

//         prevRef.current = name

//     })


//     const handleFocus = () => {
//         console.log('yyyyyyyyy');
//         console.log(nameRef.current);
//         nameRef.current.style.backgroundcolor = 'red'
//     }

//     return (
//         <div>
//             <input
//                 type='text'
//                 onChange={(event) => setName(event.target.value)}
//                 name='name'
//                 onFocus={handleFocus}
//                 ref={nameRef}
//             />

//             render componet : {rendercount.current}

//             state value : {name}
//         </div>
//     );
// }

// export default Example;

// import React, { useEffect, useState } from 'react';

// function Example(props) {

//     const [count, setCount] = useState('')
//     const [num, setNum] = useState('')

//     useEffect(()=>{

//     },[num])


//     const fuctFind = () => {
//         console.log('yyyyyyyy');

//         let fact = 1;

//         for (let i = 1; i <=parseInt(num); i++) {

//            return fact = fact * i;

//         }
//     }

//     const result = fuctFind()

//     return (
//         <div>
//             <button onClick={setCount(count + 1)}>+</button>

//                 {count}

//             <input type='number' onChange={(event) => setNum(parseInt(event.target.value))} />
//             <span>{result}</span>
//         </div>
//     );
// }

// export default Example;

import React, { useCallback, useState } from 'react';
import ExampleList from './ExampleList';

function Example(props) {

    const [theme, setTheme] = useState(false)
    const [num, setNum] = useState(0)

    const styalecom = {
        backgroundColor: theme ? "red": "white",
        color: theme ? "white": "red",
    }

    // const getData = () => {
    //     return (num, num+1, num+2)
    // }

    const getData = useCallback((inc) => {
        return [num+inc, num+1+inc, num+2+inc]
    }, [num])

    return (
        <div style={styalecom}>
            <br></br> <br></br> <br></br> <br></br>
            <button onClick={()=> setTheme(!theme)}>Change Theme</button>

            <br></br>
            <input onChange={(event)=> setNum(parseInt(event.target.value))}/>

            <ExampleList exData = {getData}/>

        </div>
    );
}

export default Example;