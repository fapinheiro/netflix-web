import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.scss']
})
export class MovieRowComponent implements OnInit {

  @Input('movieList') movieList: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getMovieSRC(moviePath: string): string {
    return `https://image.tmdb.org/t/p/w300${moviePath}`; 
  }
}
