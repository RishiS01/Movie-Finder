import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie.routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { DialogComponent } from '../shared/dialog/dialog.component';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    UpcomingMoviesComponent,
    PopularMoviesComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MaterialModule,
    FormsModule,
    NgxMasonryModule,
    NgMasonryGridModule,

  ],
  entryComponents: [DialogComponent]
})
export class MovieModule { }
