import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  apiKey = environment.apiUrlKey;
  baseUrl = environment.baseApiUrl;
  constructor(
    public http: HttpClient
  ) { }

  getSeriesDetail(id) {
    return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }

  getSeriesCast(id) {
    return this.http.get(`${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`)
      .pipe(
        map(
          res => {
            return res;
          }
        )
      )
  }

  getSeriesVideo(id) {
    return this.http.get(`${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  getSimilarShows(id) {
    return this.http.get(`${this.baseUrl}/tv/${id}/similar?api_key=${this.apiKey}`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }

  getRecomendedShows(id) {
    return this.http.get(`${this.baseUrl}/tv/${id}/recommendations?api_key=${this.apiKey}`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }
  searchSeries(query) {
    return this.http.get(`${this.baseUrl}/search/tv?api_key=${this.apiKey}&query=${query}`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }
  getTopratedSeries() {
    return this.http.get(`${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }
  getPopularTvSeries() {
    return this.http.get(`${this.baseUrl}/tv/popular?api_key=${this.apiKey}`)
      .pipe(
        map(res => {
          return res;
        })
      )
  }
}
