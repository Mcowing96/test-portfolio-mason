import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
     <!-- header -->
     <section class="hero is-dark">
     <div class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item">
          Mason Cowing - Software Engineer - <br> B.S. Computer Eng. - M.S. Computer Science Candidate
          hello
        </a>
      </div>
    </div>
    </section>
    <!-- footer -->
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
