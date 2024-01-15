import { MainContainer } from "./CardStyle"


export const Card = ({movie})=>{
    return(
        <MainContainer to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title} 
            id={movie.id}/>
            <div className="infoContainer">
            <h1>{movie.title}</h1>
            <h4>Rating:{movie.vote_average}</h4>
            </div>
        </MainContainer>
    )
}