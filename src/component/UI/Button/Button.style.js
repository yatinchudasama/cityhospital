import styled from "styled-components";

 export const  Basebutton = styled.button`
    background: #FF6337;
    border: 0;
    padding: 10px 35px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
`
export const primary = styled(Basebutton)`
background: #FF6337;
color: #fff;
`

export const secondry = styled(Basebutton)`
background: #0000;
color: #fff;
`

export const outline = styled(Basebutton)`
background: none;
color: #0000;
`