import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
    <app-header></app-header>  
    <app-header-under></app-header-under>  
    <router-outlet></router-outlet>
    <app-main-content></app-main-content>
    <app-contact-me></app-contact-me>
    <app-footer></app-footer>
      
  `,
  styles: []
})
export class AppComponent {
  title = 'my-portfolio';
}
