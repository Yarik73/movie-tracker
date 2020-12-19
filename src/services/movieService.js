export default class MovieService {

  _apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGMwYjFmMjViOWJlNDRhNTIwMzYzOGMwNjkwOThmMyIsInN1YiI6IjVmOTgyOWFiYWQ1MGYwMDAzOWI0Njg2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbG4jLJ4n_vwh1abw_JsURmX5NfRVd7QStOiMH1AIh0';
  _apiBase = 'https://api.themoviedb.org/3/';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`, {
      headers: {
        'Authorization': `Bearer ${this._apiKey}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    });

    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`);
    }
    return await res.json()
  }

  async getMarvelMovies(id) {
    const movies = await this.getResource(`list/${id}`);
    return movies;
  }

  async getMovie(id) {
    const movie = await this.getResource(`movie/${id}`);
    return movie;
  }

  async getVideo(id) {
    const video = await  this.getResource(`movie/${id}/videos`);
    return video;
  }
}
