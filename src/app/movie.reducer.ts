import { Movie } from "./models/movie.model";

import * as MovieActions from './movie.actions'

// Each field must be implemented in the reducer
export interface MyState {
	movies: Movie[];
	editMovie: string;
	editMovieIndex: number;
}

const initialState: MyState = {
	movies: [],
	editMovie: '',
	editMovieIndex: -1
};

export function movieReducer(state: MyState = initialState, action: any) {
	switch (action.type) {
		case MovieActions.SET_MOVIES:
			return {
				...state, // copy the old state, a good practice
				movies: [...action.payload], // Set the new value
				editMovie: state.editMovie,
				editMovieIndex: state.editMovieIndex
			}
		// case MovieActions.ADD_MOVIE:
		// 	return {
		// 		...state, // copy the old state, a good practice
		// 		movies: [...state.movies, action.payload], // Add the new value
		// 		editOffer: state.editMovie,
		// 		editOfferIndex: state.editMovieIndex
		// 	}
		
		// case MovieActions.UPDATE_MOVIE:
		// 	const offer = state.movies[action.payload.index];
		// 	const updatedOffer = {
		// 		...offer,
		// 		...action.payload.movie
		// 	}
		// 	const updatedOffers = [...state.movies];
		// 	updatedOffers[action.payload.index] = updatedOffer;
			
		// 	return {
		// 		...state,
		// 		movies: updatedOffers, // Set the new value
		// 		editOffer: state.editMovie,
		// 		editOfferIndex: state.editMovieIndex
		// 	}
		// case MovieActions.DELETE_MOVIE:
		// 	return {
		// 		...state,
		// 		movies: state.movies.filter( (offer, index) => { return index !== action.payload; }), 
		// 		editOffer: state.editMovie,
		// 		editOfferIndex: state.editMovieIndex
		// 	}
		// case MovieActions.START_EDIT:
		// 	return {
		// 		...state,
		// 		movies: state.movies,
		// 		editOfferIndex: action.payload,
		// 		editOffer: {...state.movies[action.payload]}
		// 	}	
		// case MovieActions.STOP_EDIT:
		// 	return {
		// 		...state,
		// 		movies: state.movies,
		// 		editOfferIndex: -1,
		// 		editOffer: null
		// 	}	
	    default:
			return state;
	}
}