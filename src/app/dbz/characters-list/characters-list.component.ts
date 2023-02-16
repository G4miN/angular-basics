import { Component, Input } from '@angular/core';
import type { Character } from "../main-page/main-page.component"

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent {
  @Input('data') characters: Character[] = []
}
