import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header"


export default function ListMovies(){

   const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
        promise.then(response =>{
            setMovies(response.data)
        })
    }, []);

    return(
    <>
 
    <Header/>
        <div>
                <h2>Selecione o filme</h2>
         </div>
         <div className="listmovies">

                {movies.map(movies =>(
                    <Link to={`sessoes/${movies.id}`}>
                        <div className="item-movie" key={movies.id}>
                            <img src={movies.posterURL} alt={movies.title}></img>
                        </div>
                    </Link>
                ))} 
            </div>
    
        </>
    )
}