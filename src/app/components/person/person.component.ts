import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MovieService } from '../main/services/movie-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PersonData {
  name: string;
  character:string
}

export interface personCrew {
  name: string;
  job:string;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  displayedColumns: string[] = ['name', 'character'];
  columnsDisplayed: string[] = ['name', 'job'];
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) crewPaginator: MatPaginator;
  
  person: Object;
  personKnownFor:Array<Object>;
  personCrew: any = new MatTableDataSource<personCrew>()
  personMovie: PersonData[] = [];
  personNickName: any[];
  // dataSource:any = new MatTableDataSource<PersonData>()
  dataSource: any;
  

  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };
  
  constructor(
    public movieService: MovieService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.personDetails(id);
      this.personMovies(id);
    });
  }

  personDetails(id) {
    this.movieService.getPersonDetails(id).subscribe((person: any) => {
      this.person = person;
      this.personNickName = person.also_known_as;
    })
  }
  personMovies(id) {
    this.movieService.getPersonMovies(id).subscribe((pMovie: any) => {
      this.dataSource = new MatTableDataSource<PersonData>()
      this.dataSource.data = pMovie.cast
      this.personKnownFor = pMovie.cast.slice(0,25);
      this.personCrew.data = pMovie.crew;
      this.dataSource.paginator = this.paginator;
      this.personCrew.paginator = this.crewPaginator;
    });
  }

  getMovieDetail(movie) {
    this.router.navigate([`movie/${movie.id}`])
  }
}
