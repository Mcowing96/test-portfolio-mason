import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  template: `
    <div class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item">
          Email me at 
          <a href = "mailto:cowing42@gmail.com"> &nbsp; Cowing42@gmail.com</a>
        </a>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
