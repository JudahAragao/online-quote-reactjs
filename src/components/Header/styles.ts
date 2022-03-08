import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`

`

export const NavLink = styled(Link)`
    text-decoration: none;
    margin: 5px;
    padding: 5px;
    color: white;

    &:hover{
        color: #ccc;
    }

    &:nth-child(2){
        background-color: green;
        border-radius: 5px;
    }

    &:nth-child(2):hover{
        background-color: #125c0a;
    }
    
    &:nth-child(3){
        background-color: yellow;
        border-radius: 5px;
        color: black;
    }

    &:nth-child(3):hover{
        background-color: #e8d417;
    }

`