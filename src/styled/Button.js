import styled from "styled-components"

export const Button = styled.button`
    width: 220px;
    height: 44px;
    gap: 10px;
    border:none;
    border-radius: 5px;
    padding-top: 10px;
    padding-right: 18px;
    padding-bottom: 10px;
    padding-left: 18px;
    color:white;
    background-color:black;
     transition:0.4s background ease-in;
    &:hover{
        background-color:white;
        color:black;
        border:1px solid;
        cursor: pointer;
        transition:0.3s background ease-in;
    }
    &:active{
        transform:translateY(2px)
    }
`
export const OutlineButton= styled(Button)`
    background-color:white;
    color:black;
    border:1px solid black;
    &:hover{
        background-color:black;
        color:white;
        border:1px solid transparent;
        cursor: pointer;
    }
`