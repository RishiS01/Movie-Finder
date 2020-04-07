import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = environment.apiUrlKey;
  baseUrl = environment.baseApiUrl;
  constructor(
    public http: HttpClient,
  ) {}


  getGenres() {
    return this.http.get(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
      .pipe(map((res) => {
        return res
      }))
  }

  getTopListedMovies() {
    return this.http.get(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`)
      .pipe(map((res) => {
        return res;
      }))
  }

  getPopularMovies() {
    return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  getDetail(id) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=credits`)
      .pipe(
        map((res) => {
          return res;
        })
      )
  }


  getReviews(id) {
    return this.http.get(`${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}&language=en-US&page=1`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }

  getSimilarMovies(id) {
    return this.http.get(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }

  getCredits(id) {
    return this.http.get(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }

  getVideo(id) {
    return this.http.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }

  getMoviesByGenre(id) {
    
    return this.http.get(`${this.baseUrl}/genre/${id}/movies?api_key=${this.apiKey}`)
      .pipe(
        map(res => {
          return res
        })
      )
  }

  getUpcomingMovies() {
    return this.http.get(`${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&region=in`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }

  searchMovie(search_query) {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${search_query}`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }

  getPersonDetails(id) {
    return this.http.get(`${this.baseUrl}/person/${id}?api_key=${this.apiKey}`)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
  getPersonMovies(id) {
    return this.http.get(`${this.baseUrl}/person/${id}/movie_credits?api_key=${this.apiKey}`)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}
