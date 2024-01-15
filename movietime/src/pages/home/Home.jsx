import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetList } from "../../api/api";
import { Card } from "../../components/card/Card";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import { MainContainer, Part1, Part2, Part3 } from "./HomeStyle";

export default function Home(){
const[movies,setMovies]=useState([])

    useEffect(()=>{
        GetList(setMovies)
    },[])

    return(
    <MainContainer>
        <Part1>
        <Part2>
            <Header text="Home"/>
            <Link to="/favorites">
            <h6>Favoritos</h6>
            </Link>
        </Part2>
        </Part1>
        <Part3>
        
        {movies.map((movie)=>{
                return <Card movie={movie}/>;
                
            })}
        </Part3>
        <Footer/>
    </MainContainer>
    )
}