import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-unauthenticated-content',
  template: `<div>login form here</div>`,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class UnauthenticatedContentComponent {}

@NgModule({
  imports: [],
  declarations: [UnauthenticatedContentComponent],
  exports: [UnauthenticatedContentComponent],
})
export class UnauthenticatedContentModule {}
