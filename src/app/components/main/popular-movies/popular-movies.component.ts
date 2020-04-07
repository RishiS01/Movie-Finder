import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
import * as _moment from 'moment';
import { MovieService } from '../services/movie-service.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  public masonryOptions: NgxMasonryOptions = {
		transitionDuration: '0.8s',
		gutter: 20,
		resize: true,
		initLayout: true,
		fitWidth: true
	};
  popularList: Array<Object>;
  constructor(
    public movieService: MovieService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.movieService.getPopularMovies().subscribe((data: any) => {
      this.popularList= data.results;
      this.popularList.map((popular: any) => {
        popular.release_date = _moment(popular.release_date).format('MMM DD,YYYY');
      })
    })
  }

  getMovieDetail(id) {
    this.router.navigate([`/movie/${id}`]);
  }
}
