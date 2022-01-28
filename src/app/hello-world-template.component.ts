
import { Component } from '@angular/core';

@Component({
    selector: 'hello-world-template',
    template: `
        <h2>Hello World Template</h2>
        <button (click)="onEditClick()">Make text editable!</button>
        <p [contentEditable]="canEdit">{{ message }}</p>
        `
  })
  export class HelloWorldTemplateComponent {
    message = 'I am read only!';
    canEdit = false;
    onEditClick() {
      this.canEdit = !this.canEdit;
      if (this.canEdit) {
        this.message = 'You can edit me!';
      } else {
        this.message = 'I am read only!';
      }
    }
  }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/