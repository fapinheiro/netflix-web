import { Action } from "@ngrx/store";
import { Movie } from "./models/movie.model";

// Place the feature name so that actions can be unique application wide in order to avoid obscure errors
export const SET_MOVIES = '[Search Movies] SET_MOVIES';
// export const ADD_MOVIE = '[Search Movies] ADD_MOVIE';
// export const UPDATE_MOVIE = '[Search Movies] UPDATE_MOVIE';
// export const DELETE_MOVIE = '[Search Movies] DELETE_MOVIE';
// export const START_EDIT = '[Search Movies] START_EDIT';
// export const STOP_EDIT = '[Search Movies] STOP_EDIT';

export class SetMovies implements Action {
	readonly type = SET_MOVIES;
	
	constructor(public payload: Movie[]) {}
}

// export class AddMovie implements Action {
// 	readonly type = ADD_MOVIE;
	
// 	constructor(public payload: Movie) {}
// }

// export class UpdateMovie implements Action {
// 	readonly type = UPDATE_MOVIE;
	
// 	constructor(public payload: {index: number, movie: Movie}) {} // The index and the object to be updated
// }

// export class DeleteMovie implements Action {
// 	readonly type = DELETE_MOVIE;
	
// 	constructor(public payload: number) {} // The index to be deleted
// }

// export class StarEditMovie implements Action {
// 	readonly type = START_EDIT;
	
// 	constructor(public payload: number) {} // The index to be deleted
// }

// export class StopEditMovie implements Action {
// 	readonly type = STOP_EDIT;
	
// }

// export type MovieActions = SetMovies | AddMovie | UpdateMovie | DeleteMovie | StarEditMovie | StopEditMovie;

export type MovieActions = SetMovies ;
