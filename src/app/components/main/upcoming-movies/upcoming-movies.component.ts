import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _moment from 'moment';
import { NgxMasonryOptions } from 'ngx-masonry';
import { MovieService } from '../services/movie-service.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {

  upcomingMovies: Array<Object>
  startDate: string;
  endDate: string;
  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };
  constructor(
    public movieService: MovieService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.upComingMovies();
  }

  upComingMovies() {
    this.movieService.getUpcomingMovies().subscribe((upcoming: any) => {
      this.upcomingMovies = upcoming.results;
      this.startDate = _moment(upcoming.dates.minimum).format('DD-MMM-YYYY');
      this.endDate = _moment(upcoming.dates.maximum).format('DD-MMM-YYYY');
    });
  }

  getMovieDetail(id) {
    this.router.navigate([`/movie/${id}`]);
  }

}
