import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    font-size: 3vh;
    text-decoration: none;
    width: 70%;
    align-items: stretch;

    :hover{
        cursor: pointer;
        border-color: red;
    }
    img{
        border-radius: 5px;
        :hover{
            margin: 30px 15px 0;
	        font-weight: 300;
            color: #333;
            -webkit-transition: .3s ease-in-out;
	        transition: .3s ease-in-out;
            text-decoration: none;
        }
    }
    .infoContainer{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`