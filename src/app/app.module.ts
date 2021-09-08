import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { HomeComponent } from './home/home.component';
import { MovieRowComponent } from './components/movie-row/movie-row.component';
import { FeaturedMovieComponent } from './components/featured-movie/featured-movie.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieRowComponent,
    FeaturedMovieComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot(fromApp.appReducer), // NgRx will create a store automatically
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
