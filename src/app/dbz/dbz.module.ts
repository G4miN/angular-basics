import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent, Character } from './main-page/main-page.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { AddCharacterComponent } from './add-character/add-character.component';

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersListComponent,
    AddCharacterComponent,
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }