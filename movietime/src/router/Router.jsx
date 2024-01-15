import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Detail  from "../pages/detail/Detail";
import Favorites from "../pages/favorites/Favorites";
import Home from "../pages/home/Home";


export function Router(){
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Home/>}/>
                <Route path="/movies/:id" element={<Detail/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                </Routes>
        </BrowserRouter>
        
    )
}