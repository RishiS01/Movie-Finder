import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';



export const movieRoutes: Routes = [
  {
    path:'', component: MoviesComponent
  },
  {
    path:'movie/:id', component: MovieComponent
  },
    {
    path:'upcoming', component: UpcomingMoviesComponent
  },
  {
    path:'popular/movies', component: PopularMoviesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(movieRoutes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
