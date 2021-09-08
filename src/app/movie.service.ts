import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Movie } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieInfo(movieId: number, type: string): Observable<any> {
    if (type === 'movie') {
      return this.basicFetch(`movie/${movieId}?language=pt-BR&api_key=${environment.apiKey}`)
        .pipe(
          map((data) => data.body)
        )
    }
    return this.basicFetch(`tv/${movieId}?language=pt-BR&api_key=${environment.apiKey}`)
      .pipe(
        map((data) => data.body)
      )
  } 

  basicFetch(endpoint: string): Observable<any> {
    return this.http.get(`${environment.apiBase}/${endpoint}`,
      {
        observe: 'response',
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      });
  }

  getHomeList(): Observable<Movie[]> {
    let list: Movie[] = [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        
        items: this.basicFetch(`discover/tv?with_network=213&language=pt-BR&api_key=${environment.apiKey}`)
          .pipe(
            map((data) => data.body.results)
          )
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
     
        items: this.basicFetch(`trending/all/week?language=pt-BR&api_key=${environment.apiKey}`)
          .pipe(
            map((data) => data.body.results)
          )
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
       
        items: this.basicFetch(`movie/top_rated?language=pt-BR&api_key=${environment.apiKey}`).pipe(
          map((data) => data.body.results)
        )
      },
      {
        slug: 'action',
        title: 'Ação',
       
        items: this.basicFetch(`discover/movie?with_genres=28&language=pt-BR&api_key=${environment.apiKey}`).pipe(
          map( (data) => data.body.results)
        )
      },
      {
        slug: 'comedy',
        title: 'Comédia',
      
        items: this.basicFetch(`discover/movie?with_genres=35&language=pt-BR&api_key=${environment.apiKey}`).pipe(
          map( (data) => data.body.results)
        )
      },
      {
        slug: 'horror',
        title: 'Terror',
       
        items: this.basicFetch(`discover/movie?with_genres=27&language=pt-BR&api_key=${environment.apiKey}`).pipe(
          map( (data) => data.body.results)
        )
      },
      {
        slug: 'romance',
        title: 'Romance',
     
        items: this.basicFetch(`discover/movie?with_genres=10749&language=pt-BR&api_key=${environment.apiKey}`).pipe(
          map( (data) => data.body.results)
        )
      },
      {
        slug: 'domentry',
        title: 'Documentários',
       
        items: this.basicFetch(`discover/movie?with_genres=99&language=pt-BR&api_key=${environment.apiKey}`).pipe(
          map( (data) => data.body.results)
        )
      },
    ];
    return of(list);
  }
}
