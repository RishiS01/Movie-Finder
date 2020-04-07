import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Router } from '@angular/router';
import * as _moment from 'moment';
import { MovieService } from '../services/movie-service.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };
  popularList: Array<Object>;
  theatersList: Array<Object>;
  topRatedList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;
  breakpoint: number;

  constructor(
    public movieService: MovieService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getTopRatedMovies();
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
  }

  getTopRatedMovies() {
    this.movieService.getTopListedMovies().subscribe((data: any) => {
      this.topRatedList = data.results;
      this.topRatedList.map((toprated: any) => {
        toprated.release_date = _moment(toprated.release_date).format('MMM DD,YYYY');
      })
    })
  }

  searchMovies() {
    this.movieService.searchMovie(this.searchStr)
    .subscribe((data: any) => {
      console.log('searchMovies');
      console.log(data);
      
      
      this.searchRes = data.results;
      this.searchRes.map((searchlist: any) => {
        searchlist.release_date = _moment(searchlist.release_date).format('MMM DD,YYYY');
      })
    })
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }

  getMovieDetail(movie_id) {
    this.router.navigate([`movie/${movie_id}`])
  }
}
