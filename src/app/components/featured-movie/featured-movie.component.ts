import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Genre } from 'src/app/models/genre.model';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.scss']
})
export class FeaturedMovieComponent implements OnInit, OnDestroy {

  @Input('featured') featured: any;
  featuredSubscription!: Subscription;
  featuredBackgroundUrl: string = '';
  yearOfRelease: number | null = null;
  genresLabel: string = '';

  constructor(
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    // Read feature store
    this.featuredSubscription = this.store.select('featured')
      .subscribe(
        data => {
          this.featured = data.featured;
          this.featuredBackgroundUrl = `https://image.tmdb.org/t/p/original${this.featured.backdrop_path}`;
          this.yearOfRelease = new Date(this.featured.first_air_date).getFullYear();
          let genres: string[] = [];
          for (let i in this.featured.genres) {
            genres.push(this.featured.genres[i].name);
          }
          this.genresLabel = genres.join(', ');
          
          // console.log(this.featured);
        }
    );
  }

  ngOnDestroy(): void {
    this.featuredSubscription.unsubscribe();
  }

}
