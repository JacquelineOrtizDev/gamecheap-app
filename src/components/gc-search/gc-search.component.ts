import { Component, Output, Input } from "@angular/core";
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'gc-search',
    templateUrl: './gc-search.component.html',
    providers: []
  })

  export class SearchComponent {
      @Input() title: string = "";
      @Input() count: number = 0;
      search: string = "";
      @Output() OnTitleEntered: EventEmitter<string> = new EventEmitter<string>();

      public SearchGames() {
          this.OnTitleEntered.emit(this.search);
      }
  }