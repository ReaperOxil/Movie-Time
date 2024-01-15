import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import { MainContainer, Part1, Part2, Part3 } from "../home/HomeStyle";

export default function Home(){


    return(
    <MainContainer>
        <Part1>
        <Part2>
            <Header text="Favorites"/>
            <Link to="/">
            <h6>Home</h6>
            </Link>
        </Part2>
        </Part1>
        <Part3>
        
        </Part3>
        <Footer/>
    </MainContainer>
    )
}