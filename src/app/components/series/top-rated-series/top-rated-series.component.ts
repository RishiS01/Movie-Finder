import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
import { SeriesService } from '../service/series.service';

@Component({
  selector: 'app-top-rated-series',
  templateUrl: './top-rated-series.component.html',
  styleUrls: ['./top-rated-series.component.scss']
})
export class TopRatedSeriesComponent implements OnInit {

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
    public router: Router
  ) { }

  ngOnInit() {
    this.topRatedSeries();
  }

  topRatedSeries() {
    this.seriesService.getTopratedSeries().subscribe((res: any) => {
      this.series = res.results;
    })
  }

  getSeriesDetail(id) {
    this.router.navigate([`/series/${id}`])
  }
}
