import { Component } from '@angular/core';

export interface Character {
  name: string,
  power: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.css']
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: "Goku",
      power: 15000
    },
    {
      name: "Vegeta",
      power: 14000
    },
    {
      name: "Krilling",
      power: 700
    }
  ]

  new: Character = {
    name: "",
    power: 0
  }
}


