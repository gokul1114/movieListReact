import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import "./style.css";

export default function App() {
  const movies = [
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: ` When Earth becomes uninhabitable in the future, a farmer and ex-NASA
  pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team
  of researchers, to find a new planet for humans.`
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: `Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.`
    },

    {
      name: "96",
      poster:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: 8.6,
      summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`
    },

    {
      name: "M.S. Dhoni: The Untold Story",
      poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      rating: 7.9,
      summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`
    }
  ];
  return (
    <div className="movie-list">
      {movies.map((e) => (
        <Display
          className="main-content"
          name={e.name}
          img={e.poster}
          rating={e.rating}
          summary={e.summary}
        />
      ))}
    </div>
  );
}

function Display({ name, img, rating, summary }) {
  return (
    <div class="movie-container">
      <img className="movie-poster" src={img} alt={name} />
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating">
          <span aria-label="" role="img">
            ⭐
          </span>
          {rating}
        </p>
      </div>
      <p>{summary}</p>
      <Counter />
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>like {like}</button>
      <button onClick={() => setDisLike(disLike + 1)}>dislike {disLike}</button>
    </div>
  );
}
