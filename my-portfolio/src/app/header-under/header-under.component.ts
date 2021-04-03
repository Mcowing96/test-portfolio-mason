import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-under',
  template: `

  <style>
    body {margin: 0;
          padding: 0;
          background-color: #ccc;}
    h1   {color: blue;}
    a    {color: red;}
</style>

<section class="hero is-info">
<ul>
  <a href="default.asp">Home </a>
  <a href="news.asp">News </a>
  <a href="contact.asp">Contact </a>
  <a href="about.asp">About </a>
</ul>
</section>
  `,
  styles: [
  ]
})
export class HeaderUnderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
