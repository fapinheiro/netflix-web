import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

export interface MovieRow {
  movie: Movie,
  title: string,
  scrollX: number,
  width: number,
  items: any[],
}

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.scss']
})
export class MovieRowComponent implements OnInit, OnDestroy {

  @Input('movieList') movieList: Movie[] = [];

  movieRowList: MovieRow[] = [];
  subscription: Subscription[] = [];
  scrollXStart: number = -400;
  scrollXRound: number = Math.round(window.innerWidth / 2);
  itemWidth: number = 170;

  constructor() { }

  ngOnInit(): void {

    for (let i in this.movieList) {
      let subscription = this.movieList[i].items.subscribe(
        data => {
          let movieRow = {
            movie: this.movieList[i],
            title: this.movieList[i].title,
            scrollX: this.scrollXStart,
            width: data.length * 1000,
            items: data
          };
          this.movieRowList.push(movieRow);
        }
      );
      this.subscription.push(subscription);
    }
  }

  ngOnDestroy() {
    for (let i in this.subscription) {
      this.subscription[i].unsubscribe();
    }
  }

  getMovieSRC(moviePath: string): string {
    return `https://image.tmdb.org/t/p/w300${moviePath}`; 
  }

  handleLeftArrow(movie: MovieRow): void {
    let x = movie.scrollX + this.scrollXRound;
    if (x > 0) {
      x = 0;
    }
    movie.scrollX = x;
  }

  handleRightArrow(movie: MovieRow): void {
    let x = movie.scrollX - this.scrollXRound;
    let listW =  this.itemWidth * movie.items.length;
    if (x < -listW) {
      x = -listW + this.itemWidth;
    }
    movie.scrollX = x;
  }
}
