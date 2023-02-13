import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html',
    styleUrls: ['counter.component.css']
})

export class CounterComponent {
    title: string = 'Contador App';
    number: number = 0;
    base: number = 2

    calculateBase(value: number) {
        this.number += value;
    }
}