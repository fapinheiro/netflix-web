import { Component, OnDestroy, OnInit } from '@angular/core';
import { INIT, Store } from '@ngrx/store';
import { of, Subscription } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieService } from '../movie.service';

import * as fromApp from '../store/app.reducer';
import * as MovieActions from '../movie.actions';
import * as FeaturedMovieActions from '../components/featured-movie/feature-movie.actions';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  movies: Movie[] = [];
  
  moviesSubscription!: Subscription;
  
  featuredMovie: any | null = null;
  
  loading: boolean = false;

  constructor(
    private movieService: MovieService,
    private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {

    this.loading = true;

    this.movieService.getHomeList()
      .subscribe(
        values => {
          this.store.dispatch(new MovieActions.SetMovies(values));
        }
      );

    // Read movie store
    this.moviesSubscription = this.store.select('movies')
      .subscribe(
        data => {
          this.movies = data.movies;
        }
    );

    // Get featured
    let originals = this.movies.filter(m=>m.slug === 'originals');
    originals[0].items.pipe(
      switchMap(
        data => {
          let randomChosen = Math.floor(Math.random() * (data.length - 1))
          // console.log(randomChosen);
        
          let chosen = data[randomChosen]; 
          // console.log(chosen);
          return of(chosen as any);
        }
      )
    ).pipe(
      filter( chosen => chosen !== null),
      switchMap(
        (chosen: any) => {
          return this.movieService.getMovieInfo(chosen.id, 'tv'); 
        }
      )
    ).pipe(
      filter( chosenInfo => chosenInfo !== null) 
    ).subscribe(
      chosenInfo => {
        // console.log('chosenInfo found!')
        // console.log(chosenInfo);
        this.store.dispatch(new FeaturedMovieActions.SetFeatured(chosenInfo))
      },
    );

    // Read feature store
    this.moviesSubscription = this.store.select('featured')
      .subscribe(
        data => {
          this.featuredMovie = data.featured;
          this.loading = false;
        },
        error => {
          this.loading = false;
        }
    );
  }


  sleep(seconds: number): void
  {
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
  }

  ngOnDestroy(): void {
    this.moviesSubscription.unsubscribe();
  }

}
