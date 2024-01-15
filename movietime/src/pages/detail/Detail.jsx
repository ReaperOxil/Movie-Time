import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Btn from "../../components/buttons/Btn";
import FavBtn from "../../components/buttons/FavBtn";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import { MainContainer, Part1, Part2, Part3, Part4 } from "./DetailStyle";

export default function Details(){
    const [movie, setMovie] = useState({});
    const params = useParams();
    

    useEffect(()=>{
        const getMovie = async () =>{
            const result = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=fb03eaa2e9d2f3c58fcac118fc158cb6`)
            const data = await result.json();

            setMovie(data);
        }
        getMovie();
    },[])
    

    return(
        <MainContainer>
            <Part1>
                <Header text={movie.title}/>
                <Part4>
                    <Link to="/">
                    <h6>Home|</h6>
                    </Link>
                    <Link to="/favorites">
                    <h6>Favoritos</h6>
                    </Link>
                </Part4>
            </Part1>
            <Part2>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title} 
                id={movie.id}/>
                <Part3>
                    <h1>Title: {movie.title}</h1>
                    <h2>Synopse: {movie.overview}</h2>
                    <div callsName="infoContainer">
                        <h4>Rating: {movie.vote_average}</h4>
                        <FavBtn/>
                    </div>
                    <Link to="/">
                    <Btn/>
                    </Link>
                </Part3>
            </Part2>
            <Footer/>
        </MainContainer>
    )
}