import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
import * as _moment from 'moment';
import { MovieService } from '../main/services/movie-service.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  title: string;
  movies: Object;
  public masonryOptions: NgxMasonryOptions = {
		transitionDuration: '0.8s',
		gutter: 20,
		resize: true,
		initLayout: true,
		fitWidth: true
	};
  constructor(
    public movieService: MovieService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getMovieByGenre();
  }

  getMovieByGenre() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.title = param['name'];
      this.movieService.getMoviesByGenre(id).subscribe((data: any) => {
        this.movies = data.results;
      })
    })
  }
  getMovieDetail(id) {
    this.router.navigate([`movie/${id}`])
  }
}
