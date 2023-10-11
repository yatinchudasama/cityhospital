import styled from "styled-components";


export const BaseCard = styled.div`
    border-radius: 4px;
    width: 345px;
    height: 280px;
    padding: 6px;
    // background-color:gray;
    margin: 10px;
    border-redius: 10px;
    border: 1px solid black;

    // &:hover{
    //     background: orange;
    // }
    // position: relative;
}
`

export const Heading = styled.h2`
    color: black;
    // &:hover{
    //     background: black;
    // }
`
export const Subtitle = styled.h3`
    color: blue;
    &:hover{
        background: #fff;
    }
`


export const Icon = styled.h3`
    color: white;
    border: 1px solide red;
    // &:hover{
    //     background: #fff;
    // }
    // position: absolute;
    
    // margin-left: 36%;
`
export const Button = styled.button`
background: #FF6337;
border: 0;
padding: 10px 35px;
color: #fff;
transition: 0.4s;
border-radius: 50px;
`
// export const Price = styled.p`
// font-weight:bold;
// // color:orange;
// &:hover{
//     background: #fff;
// }
// `
