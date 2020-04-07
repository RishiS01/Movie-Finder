import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule } from './series.routing.module';
import { MaterialModule } from 'src/app/material.module';
import { TopRatedSeriesComponent } from './top-rated-series/top-rated-series.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { FormsModule } from '@angular/forms';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { DialogComponent } from '../shared/dialog/dialog.component';



@NgModule({
  declarations: [
    PopularSeriesComponent,
    SeriesDetailComponent,
    TopRatedSeriesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SeriesRoutingModule,
    FormsModule,
    NgxMasonryModule,
    NgMasonryGridModule
  ],
  entryComponents: [DialogComponent]
})
export class SeriesModule { }
