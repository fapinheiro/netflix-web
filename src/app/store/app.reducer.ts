import * as fromMovie from '../movie.reducer'
import * as fromFeatured from '../components/featured-movie/feature-movie.reducer'
import { ActionReducerMap } from '@ngrx/store'

export interface AppState  {
	movies: fromMovie.MyState;
	featured: fromFeatured.MyState;
	// Add more stores here
}

export const appReducer: ActionReducerMap<AppState> = {
	movies: fromMovie.movieReducer,
	featured: fromFeatured.featuredReducer,
	// Add more stores here
}
