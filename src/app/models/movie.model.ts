import { Observable } from "rxjs";

export class Movie {

    constructor(public slug: string,
        public title: string,
        public items: Observable<any[]>) {}
        
}