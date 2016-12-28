import { Component } from '@angular/core';

@Component({
    selector: 'live-demo',
    template: `
<form action="/superhero-create" method='POST'>
<input type="text" name="name" [(ngModel)]="superhero.name"/>
<input type="text" name="superheroIdentity" [(ngModel)]="superhero.secretIdentity"/>
<button (click)="onCreate()">Create</button>
</form>
<a href="#" (click)="updateName()">Update</a>
{{spy}}
`
})

export class DemoComponent {
    superhero: any;

    constructor() {
        this.superhero = {
            name: 'Some name',
            secretIdentity: 'Identity'
        };
    }

    get spy() {
        return JSON.stringify(this.superhero);
    }

    updateName() {
        this.superhero.name += new Date();
    }
}
