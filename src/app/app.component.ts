import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from './components/main/services/movie-service.service';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  genres: Array<Object>
  @ViewChild(SidenavComponent, {static: true}) sideNav: SidenavComponent;

  constructor(
    public movieService: MovieService,
    public router: Router
  ) {
    // this.getGenres();

  }
 

  toggleSideNav(e) {
    this.sideNav.toggleSideBar();
  }
  // getGenres() {
  //   this.movieService.getGenres().subscribe((data: any) => {
  //     this.genres = data.genres;
  //   })
  // }
  // getMoviesByGenre(genres) {
  //   this.router.navigate([`genres/${genres.id}/${genres.name}`])
  // }
  
}
