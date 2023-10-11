
// import { BaseCard, Heading, Subtitle, Price, Subtitle1 } from './Card.style';

import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';



import { BaseCard, Heading, Icon, Subtitle, Subtitle1 } from './Card.style';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Card({ id = '', title = '', subtitle = '', btnvalue = '', btnClick = '', favClick = '', favState, }) {
    console.log(title);
    return (
        <div>
            <BaseCard className='box'>
                {/* <img src={img}></img> */}
                {/* {id} */}
                <Heading>{title}</Heading>
                <Subtitle>{subtitle}</Subtitle>
                {/* <Icon>{icon}</Icon> */}
                <Badge  color="primary" onClick={favClick}>
                    {
                        favState ?<FavoriteIcon/>:<FavoriteBorderIcon color="action" />
                    }
                   
                </Badge>
                {

                }

                {
                    btnvalue ? <Button onClick={btnClick}>{btnvalue}</Button> : null
                }

            </BaseCard>

        </div>
    );
}

export default Card;


// function Card(Data, { ...rest }) {
//     console.log(Data);
//     return (
//         <div>
//             <BaseCard {...rest}>
//                 <Subtitle></Subtitle>
//             </BaseCard>

//             {Data.map((v) => {
//                 return (
//                     <>
// <Heading>{v.name}</Heading>
// <Subtitle>{v.description}</Subtitle>
// <h2>{v.category}</h2>
// <p>{v.price}</p>
//                     </>
//                 )
//             })}
//         </div>
//     );
// }

// export default Card;