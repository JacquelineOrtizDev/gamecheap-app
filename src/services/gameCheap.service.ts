import { Injectable } from "@angular/core";
import { IGame } from "src/interfaces/game";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable()
export class GameCheapService {

     private url: string = 'https://www.cheapshark.com/api/1.0/games?title=';
     handleError = '';
     
     constructor(private http: HttpClient) {
    }
    
    getListOfGamesByTitle(value:string): Observable<IGame[]> {
        let query = this.url + value
        return this.http.get<IGame[]>(query)
    }
}