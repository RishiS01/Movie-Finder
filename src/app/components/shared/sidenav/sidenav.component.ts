import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MovieService } from '../../main/services/movie-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('snav',{static: false}) snav: MatSidenav;
  genres: Array<Object>
  constructor(
    public movieService: MovieService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getGenres();
  }

  toggleSideBar() {
    this.snav.toggle();
  }

  getGenres() {
    this.movieService.getGenres().subscribe((data: any) => {
      this.genres = data.genres;
    })
  }
  getMoviesByGenre(genres) {
    this.router.navigate([`genres/${genres.id}/${genres.name}`])
  }
}
