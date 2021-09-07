import { Action } from "@ngrx/store";

// Place the feature name so that actions can be unique application wide in order to avoid obscure errors
export const SET_FEATURED = '[Search Featured] SET_FEATURED';
// export const ADD_MOVIE = '[Search Featured] ADD_MOVIE';
// export const UPDATE_MOVIE = '[Search Featured] UPDATE_MOVIE';
// export const DELETE_MOVIE = '[Search Featured] DELETE_MOVIE';
// export const START_EDIT = '[Search Featured] START_EDIT';
// export const STOP_EDIT = '[Search Featured] STOP_EDIT';

export class SetFeatured implements Action {
	readonly type = SET_FEATURED;
	
	constructor(public payload: any) {}
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

// export type MovieActions = SetFeatured | AddMovie | UpdateMovie | DeleteMovie | StarEditMovie | StopEditMovie;

export type MovieActions = SetFeatured ;
