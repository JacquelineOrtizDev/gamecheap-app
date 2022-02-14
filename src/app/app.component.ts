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
    this._GameCheapService.getListOfGamesByTitle(search).subscribe(
      (response) => this.ConstructSteamUrl(response),
      (error) => console.log(error)
      //this.items = data;
      //this.itemNum = this.items.length;
    )
    //console.log(this.newList)
    //this.ConstructSteamUrl(this.items);
  }

  ConstructSteamUrl(response: any) {
    this.items.push(response);
    this.items.forEach(function (item) {
      if(item.steamAppId !== undefined || item.steamAppId !== null) {
        var name: string = item.external.replace(' ', '_');
        console.log('i exist');
        item.steamUrl = 'https://store.steampowered.com/app/' + item.steamAppId + '/' + name + '/';
      } else {
        console.log('roar');
        item.steamUrl = "" ;
      }
      //this.itemNum = this.items.length;
    });

  }
}
