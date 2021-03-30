import { useState, useEffect } from 'react';

const Films = () => {
   const [films, setFilms] = useState([]);

   useEffect(() => {
      fetch('https://ghibliapi.herokuapp.com/films')
         .then((data) => data.json())
         .then((json) => setFilms(json))
         .catch((err) => console.log(err));
   }, []);


   const filmMapper = () => {
      return films.map((film, index) => {
         return (
            <div>
               <h5 key={index}>{film.title}</h5>
               <h6>{film.release_date}</h6>
               <button onClick={() => console.log(film)}>Console Log</button>
            </div>
         )
      })
   };


   return (
      <div>
         <h1>Films</h1>
         {filmMapper()}
      </div>
   );
};

export default Films;