import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { NgxMasonryModule } from 'ngx-masonry';
import { FormsModule } from '@angular/forms';
import { GenresComponent } from './components/genres/genres.component';
import { MovieModule } from './components/main/movie.module';
import { SeriesModule } from './components/series/series.module';
import { PersonComponent } from './components/person/person.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { DialogComponent } from './components/shared/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    GenresComponent,
    PersonComponent,
    HeaderComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    SeriesModule,
    MovieModule,
    HttpClientModule,
    NgMasonryGridModule,
    NgxMasonryModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
