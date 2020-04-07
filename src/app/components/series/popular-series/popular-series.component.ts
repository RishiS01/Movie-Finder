import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
import * as _moment from 'moment';
import { SeriesService } from '../service/series.service';

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.scss']
})
export class PopularSeriesComponent implements OnInit {

  series: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;
  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };
  constructor(
    public seriesService: SeriesService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.popularSeries();
  }

  popularSeries() {
    this.seriesService.getPopularTvSeries().subscribe((pTV: any)=> {
      this.series = pTV.results;
      this.series.map((series: any) => {
       series.first_air_date = _moment(series.first_air_date).format('MMM DD,YYYY');
      })
    })
  }

  getSeriesDetail(id) {
    this.router.navigate([`/series/${id}`])
  }
  searchSeries() {
    this.seriesService.searchSeries(this.searchStr).subscribe((data: any) => {
      this.searchRes = data.results;
      this.searchRes.map((series: any) => {
        series.first_air_date = _moment(series.first_air_date).format('MMM DD,YYYY');
       })
    })
  }

}
