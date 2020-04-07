import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxMasonryOptions } from 'ngx-masonry';
import { MovieService } from '../services/movie-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Object
  reviews: Array<Object>
  similarMovies: Array<Object>
  cast: Array<Object>
  dialog_cast: Array<Object>;
  crew: Array<Object>
  dialog_crew: Array<Object>;
  production_house: Array<Object>;
  geners: Array<Object>;
  video: Object;

  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };
  constructor(
    private route: ActivatedRoute,
    public movieService: MovieService,
    public dom: DomSanitizer,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.getDetail(id);
      this.getReviews(id);
      this.getSimilarMovies(id);
      this.getCredits(id);
      this.getVideo(id);
    })
  }
  getDetail(id) {
    this.movieService.getDetail(id).subscribe((movie: any) => {
      console.log('movie')
      console.log(movie)

      this.movie = movie;
      this.production_house = movie.production_companies;
      this.geners = movie.genres;
      console.log(movie);
      
    })
  }
  getReviews(id) {
    this.movieService.getReviews(id).subscribe((reviews: any) => {
      this.reviews = reviews.results;
    })
  }

  getSimilarMovies(id) {
    this.movieService.getSimilarMovies(id).subscribe((similar: any) => {
      this.similarMovies = similar.results.slice(0, 10);
    })
  }

  getCredits(id) {
    this.movieService.getCredits(id).subscribe((credits: any) => {
      credits.cast = credits.cast.filter((item) => item.profile_path)
      this.cast = credits.cast.slice(0, 5);
      this.dialog_cast = credits.cast;
      this.crew = credits.crew.slice(0,5);
      this.dialog_crew = credits.crew;
    });

  }

  getMovieDetail(movie_id) {
    this.router.navigate([`movie/${movie_id}`])
  }
  getVideo(id) {
    this.movieService.getVideo(id).subscribe((res: any) => {
      if (res.results && res.results.length) {
        this.video = res.results[0];
        this.video['url'] = this.dom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/` + this.video['key'])
      }
    })
  }
  getMoreCredits(credit) {
    if(credit === 'actor'){
      this.dialog.open(DialogComponent, {
        data: {
          actor: this.dialog_cast
        }
      }).afterClosed().subscribe(() => { console.log('dialog-closed')})
      
    } else if(credit === 'crew'){
      this.dialog.open(DialogComponent, {
        data: {
          crew: this.dialog_crew
        }
      }).afterClosed().subscribe(() => { console.log('dialog-closed')})
    }
  }
  actorDetails(actor) {
    this.router.navigate([`/person/${actor.id}/${actor.name}`])
  }
}
