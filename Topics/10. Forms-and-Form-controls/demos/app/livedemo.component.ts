import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'live-demo',
    templateUrl: './livedemo.component.html',
    styles: [
        `input.ng-touched.ng-invalid {
        border: 2px dotted blue;
    }
    input.ng-valid.ng-touched {
        border: 5px solid green;
    }`
    ]
})

export class DemoComponent {
    superhero: any;

    constructor() {
        this.superhero = {
            name: '',
            secretIdentity: 'Identity'
        };
    }

    get spy() {
        return JSON.stringify(this.superhero);
    }

    updateName() {
        this.superhero.name += new Date();
    }

    onCreate(ev: any) {
        console.log(ev);
    }
}
