import styled from "styled-components"
import BackGroundImg from "../../assets/img/BackGroundImg.png"

export const MainContainer = styled.div`
    justify-content: center;
    align-items: center;
    font-size: 2vw;
    height: fit-content;
    min-height: 100vh;
    background-color: black;
`
export const Part1 = styled.div`
    height: 100vh;
    background-image: url(${BackGroundImg});
    background-position: center;
    background-size: cover;
`

export const Part2 = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 4vh;
    padding-left: 2vw;
    padding-top: 1vw;
    justify-content: center;
`

export const Part3 = styled.div`
    display: grid;
    min-height: 10vh;
    grid-template-columns: repeat(auto-fit, minmax(60vh,1fr));
    padding: 10vh 0;
    gap:5vw;
    margin-left: 10%;
`

export const Grid = styled.div`
    display: grid;
    align-items: center;
    width: 80%;
    min-height: 20vh;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    color: #fff;
    padding: 10vh 0;
    gap:5vw;
`