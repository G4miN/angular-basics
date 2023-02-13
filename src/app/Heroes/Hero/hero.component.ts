import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.component.css']
})

export class HeroComponent {
    name: string = 'Black Panther'
    age: number = 32
    ages: number[] = [
        35,
        26,
        40,
        38,
        21]
    count: number = 0;
    heroes: string[] = [
        'Hulk',
        'Black Widow',
        'Iron Man',
        'Captain America',
        'Spider-Man'];

    get fullname() {
        return this.name.toUpperCase();
    }

    nameWithAge(): string {
        return `${this.name} - ${this.age}`;
    }

    changeName(name: string) {
        let index:number = this.heroes.indexOf(name);
        //let counter = this.count += 1;

        this.name = this.heroes[index === this.heroes.length - 1 ? 0 : index + 1];
    }

    changeAge() {
        let counter = this.count += 1;

        this.count = counter === this.ages.length ? 0 : this.count += 0;
        this.age = this.ages[this.count];
    }
}