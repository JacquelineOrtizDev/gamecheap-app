import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/interfaces/game';
import { GameCheapService } from 'src/services/gameCheap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GameCheapService],
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  @Input() search: string = "";
  title: string = 'Gamecheap-app';
  itemNum: number = 0;
  items: IGame[] = [];
  newList: IGame[] = [];
  errorMessage:string = "";

  private _GameCheapService;
  constructor(GameCheapService:GameCheapService) {
    this._GameCheapService = GameCheapService;
  }
  
  SearchGames(search: string): void {
    this._GameCheapService.getListOfGamesByTitle(search).subscribe(data => {
      this.items = data;
      this.itemNum = this.items.length;
    })
  }
}

