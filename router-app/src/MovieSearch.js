import React, { useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

const API_KEY = '9d2bff12ed955c7f1f74b83187f188ae';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState(''); //검색용어 저장
  const [movies, setMovies] = useState([]);         //검색된 영화 저장
  const [selectedMovie, setSelectedMovie] = useState(null); //선택된 영화 정보 저장
  const [videoKey, setVideoKey] = useState(''); //비디오 키 저장

  const searchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: searchTerm,
        },
      });
      setMovies(response.data.results);
      setSelectedMovie(null);
      setVideoKey('');
    } catch (error) {
      console.error('영화 검색 중 오류 발생:', error);
    }
  };

  const getMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: API_KEY,
        },
      });
      setSelectedMovie(response.data);

      const videoResponse = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
        params: {
          api_key: API_KEY,
        },
      });
      if (videoResponse.data.results.length > 0) {
        const trailer = videoResponse.data.results.find(video => video.type === "Trailer");
        if (trailer) {
          setVideoKey(trailer.key);
        } else {
          setVideoKey(videoResponse.data.results[0].key);
        }
      } else {
        setVideoKey('');
      }
    } catch (error) {
      console.error('영화 상세 정보 가져오기 중 오류 발생:', error);
    }
  };

  return (
    <div>
      <h1>영화 검색</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="영화 제목을 입력하세요"
        />
        <button onClick={searchMovies}>검색</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => getMovieDetails(movie.id)} style={{ margin: '10px', cursor: 'pointer' }}>
            <img
              src={movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/150x225?text=No+Image'}
              alt={movie.title}
              style={{ width: '150px', height: '225px' }}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div>
          <h2>{selectedMovie.title}</h2>
          <img
            src={selectedMovie.poster_path ? `${IMG_BASE_URL}${selectedMovie.poster_path}` : 'https://via.placeholder.com/300x450?text=No+Image'}
            alt={selectedMovie.title}
            style={{ width: '300px', height: '450px' }}
          />
          <p>{selectedMovie.overview}</p>
          {videoKey && <YouTube videoId={videoKey} />}
        </div>
      )}
    </div>
  );
}

export default MovieSearch;