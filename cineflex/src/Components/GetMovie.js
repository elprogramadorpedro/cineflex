import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

export default function GetMovie() {
  const { idFilme } = useParams();
  const [films, setFilms] = useState([]);
  const [showtimes, setShowTimes] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => {
      setFilms(response.data);
      setShowTimes(response.data.days.map((dayMovie) => dayMovie.showtimes));
    });
  }, [idFilme]);

  if (showtimes.length === 0) {
    return (
      <>
        <Header />
      </>
    );
  }
  return (
    <>
      <Header />
      <div>
        <h2>Selecione o horário</h2>
      </div>
      <div>
        {films.days.map((days, x) => (
          <div>
            <p>
              {days.weekday} - {days.date}
            </p>
            <div>
              {showtimes[x].map((showtime) => (
                <Link to={`/assentos/${showtime.id}`}>
                  <div id={showtime.id}>
                    <p>{showtime.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <img src={films.posterURL} alt={films.title}></img>
        </div>
        <div>
          <p>{films.title}</p>
        </div>
      </div>
    </>
  );
}
