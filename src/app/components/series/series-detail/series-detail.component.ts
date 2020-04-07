import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
import { SeriesService } from '../service/series.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent implements OnInit {
  tvShow: Object;
  reviews: Array<Object>;
  similarShows: Array<Object>;
  credits: Array<Object>;
  casts: Array<Object>;
  dialog_cast: Array<Object>
  crews: Array<Object>;
  dialog_crew: Array<Object>;
  production_house: Array<Object>;
  seasons: Array<Object>;
  geners: Array<Object>;
  recommendShows: Array<Object>
  video: Object;

  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };

  constructor(
    public seriesService: SeriesService,
    public route: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog,
    public dom: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.seriesInfo(id);
      this.getSeriesCast(id);
      this.getSimilarShows(id);
      this.getRecomendedShows(id);
      this.getSeriesVideo(id)
    })
  }

  seriesInfo(id) {
    this.seriesService.getSeriesDetail(id).subscribe((tvSeries: any) => {
      this.tvShow = tvSeries;
      this.credits = tvSeries.created_by
      this.production_house = tvSeries.production_companies;
      this.geners = tvSeries.genres;
      this.seasons = tvSeries.seasons;
      console.log('geners');
    console.log(this.geners);
    });
    
    
    
  }

  getSeriesCast(id) {
    this.seriesService.getSeriesCast(id).subscribe((tvcast: any) => {
      this.casts = tvcast.cast.slice(0,5);
      this.dialog_cast = tvcast.cast;
      this.crews = tvcast.crew.slice(0,5);
      this.dialog_crew = tvcast.crew;
    })
  }

  getSeriesVideo(id) {
    this.seriesService.getSeriesVideo(id).subscribe((res: any) => {
      if (res.results && res.results.length) {
        this.video = res.results[0];
        this.video['url'] = this.dom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/` + this.video['key'])
      }
    })
  }

  getSimilarShows(id) {
    this.seriesService.getSimilarShows(id).subscribe((shows: any) => {
      this.similarShows = shows.results;
    })
  }

  getRecomendedShows(id) {
    this.seriesService.getRecomendedShows(id).subscribe((shows: any) => {
      this.recommendShows = shows.results;
    })
  }


  getSeasonDetail(id) {
    // this.router.navigate([`/series/${id}`])
  }

  actorDetails(actor) {
    this.router.navigate([`/person/${actor.id}/${actor.name}`])
  }

  getMoreCredits(credit) {
    if (credit === 'actor') {
      this.dialog.open(DialogComponent, {
        data: {
          actor: this.dialog_cast
        }
      }).afterClosed().subscribe(() => { console.log('dialog-closed') })
    } else if (credit === 'crew') {
      this.dialog.open(DialogComponent, {
        data: {
          crew: this.dialog_crew
        }
      }).afterClosed().subscribe(() => { console.log('dialog-closed') })
    }
  }
}
