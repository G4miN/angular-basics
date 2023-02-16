import { Component, Input } from '@angular/core';
import type { Character } from '../main-page/main-page.component'

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Input("new") new: Character = { name: "", power: 0 }
  @Input() characters: Character[] = [];

  Add() {
    if (this.new.name.trim().length === 0) { return; }

    this.characters.push(this.new)
    this.new = { name: "", power: 0 }
  }

  Delete() {
    if (this.characters.length === 0) { return; }
    this.characters.pop();
  }
}
