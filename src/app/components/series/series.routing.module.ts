import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { TopRatedSeriesComponent } from './top-rated-series/top-rated-series.component';


const routes: Routes = [
 
  {
    path:'popular/series', component: PopularSeriesComponent
  },
  {
    path: 'series/:id', component: SeriesDetailComponent
  },
  {
    path: 'top-rated', component: TopRatedSeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
