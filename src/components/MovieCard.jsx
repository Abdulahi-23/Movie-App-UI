import './../index.css'
function MovieCard({movie}){

    function OnBtnClick(){
        alert('Lale nga Like');
    }

    return (
        <>
        <div className='bg-zinc-800 text-white rounded-md flex items-center justify-center flex-col'>
        <div className="movie-card">
            <div className="movie-poster">
                <img src={MovieCard.url} alt={movie.title}></img>
             <div>
                <button className="favorite-btn" onClick={OnBtnClick}>❤️</button>
            </div>
            </div>   
        </div>
    
        <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
            </div>
        </div>
        </>
    );
}

export default MovieCard;