import { Injectable } from "@angular/core";
import { IGame } from "src/interfaces/game";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable()
export class GameCheapService {

     private url: string = 'https://www.cheapshark.com/api/1.0/games?title=';
     
     constructor(private http: HttpClient) {
    }
    
    getListOfGamesByTitle(value:string): Observable<IGame[]> {
        let query = this.url + value;
        
        console.log('the param just passed is:' + value);
        return this.http.get<IGame[]>(query).pipe((
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
            ))
    }
    
    private handleError(err: HttpErrorResponse) {

        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}