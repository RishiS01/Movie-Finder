import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from './components/genres/genres.component';
import { PersonComponent } from './components/person/person.component';



const routes: Routes = [
  {
    path:'movies', loadChildren:() => import('./components/main/movie.module').then(m => {
      m.MovieModule
    })
  },
  {
    path: 'tv', loadChildren: () => import('./components/series/series.module').then(m => {
      m.SeriesModule
    })
  },
  {
    path: 'genres/:id/:name', component: GenresComponent
  },
  {
    path: 'person/:id/:name', component: PersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
