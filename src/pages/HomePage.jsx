import { use } from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import './../index.css';
function HomePage(){
    const movies = [
        {id:1,title:"Night Agent",year:"2015"},
        {id:2,title:"Dragon Ball",year:"2013"},
        {id:3,title:"Sanexxx",year:"1990"},
        {id:4,title:"Mamadou DIOP",year:"2008"},
    ]

    // Là on définit une variable et une méthode qui vont garder l'état.
    // La fonction permet de mettre à jour le state
    const [SearchQuery , SetSearchQuery] = useState("")

    function BtnHandle(e){
        //La fonction preventDefault permet à la saisie de ne pas etre effacé (d'etre la valeur par defaut)
        e.preventDefault();
        alert(SearchQuery)
    }

    // value = {SearchQUery}: ce qu'on entrera sera stocké dans la var afin de pouvoir faire un traitement avec (la saisie est impossible sans onChange())
    // La fonction OnChange() permet d'affecter la saisie au value
    
    return(
        <>
        <div>
            <form className="">

                <input type="text" className="input-path" value={SearchQuery} onChange={(e) => SetSearchQuery(e.target.value)}></input>
                <button onClick={BtnHandle}>Search</button>
            </form>
            </div>
            <div className="home flex">
            <div className="movie-div grid grid-cols-2 gap-2">
                {movies.map((mouvie)=> (mouvie.title.toLowerCase().startsWith(SearchQuery) && <MovieCard movie = {mouvie}/>))}
            </div>

        </div>
        </>
    );
}
export default HomePage