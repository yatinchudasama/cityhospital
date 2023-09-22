import styled from "styled-components";


export const Heading = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    color: #2c4964;

    &:before{
        content: '';
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
    }

    &:after{
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: #FF6337;
        bottom: 0;
        left: calc(50% - 20px);
    }
`

export const Heading2 = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #111;
`

export const DHeadin4 = styled.h4`
font-weight: 700;
margin-bottom: 5px;
font-size: 20px;
color: #2c4964;
`