import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  games: string[] = [
    'Horizon Zero Dawn',
    'God Of War Ragnarok',
    'League of Legends',
    'Diablo 4',
    'Call of Duty MW 2',
    'GTA III'
  ]

  name: string = '';

  deleteGame() {
    var deletedName = this.games.shift();

    this.name = deletedName || '';
  }
}

