// const ResultField: React.FC = () => {
//   let array: object[] = [{}, {}, {}, {}];
// 	const url :string = "http://www.omdbapi.com/?apikey=3e3e7f8f&s="
//   return (
// 		<>
// 			<div className="resultField">
// 				{array.map((_, index) => (
// 					<div className="card" key={index}>
// 						<img className="cardImg" src=""/>
// 						<div className="cardTitle">Batman Begins</div>
// 						<div className="yearCreation">2005</div>
// 						<button className="details">Detail</button>
// 					</div>
// 				))}
// 			</div>
// 		</>
//   )
// }

// export default ResultField;
import React from 'react';
import './resultField.css';

interface ResultFieldProps {
  movies: any[];
}

const ResultField: React.FC<ResultFieldProps> = ({ movies }) => {
  return (
    <div className="resultField">
      {movies.map((movie) => (
        <div className="card" key={movie.imdbID}>
          <img className="cardImg" src={movie.Poster} alt={movie.Title} />
          <div className="cardTitle">{movie.Title}</div>
          <div className="yearCreation">{movie.Year}</div>
          <button className="details">Detail</button>
        </div>
      ))}
    </div>
  );
}

export default ResultField;


