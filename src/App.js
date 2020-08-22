import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './api/requests';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Banner />
      <Row 
        title="NETFLIX ORGINALS" 
        fetchUrl={requests.fetchNetflixOrigianls} 
        isLarge
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
