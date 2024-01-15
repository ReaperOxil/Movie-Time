import styled from "styled-components"
import BackGroundImg from "../../assets/img/BackGroundImg.png"

export const MainContainer = styled.div`
    justify-content: center;
    align-items: center;
    height: fit-content;
    min-height: 100vh;
    background-color: black;
    color: white;
`
export const Part1 = styled.header`
    display: flex;
    background-image: url(${BackGroundImg});
    background-position: bottom;
    justify-content: center;
    font-size: 30px;
    flex-direction: column;
    align-items: center;
    
`

export const Part2 = styled.div`
    display:flex;
    align-self: center;
    margin: 1%;
    img{
        border-radius: 15px;
        border: 5px solid white;
    }
`
export const Part3 = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    margin: 1%;

`

export const Part4 = styled.div`
    display: flex;
    
`
