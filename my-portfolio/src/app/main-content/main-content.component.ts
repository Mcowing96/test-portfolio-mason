import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  template: `
    <style>
    body {margin: 0;
          padding: 0;
          background-color: #ccc;}
    h1   {color: blue;}
    a    {color: red;}
</style>

<section class="hero is-danger">
      <br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br>

      
</section>
  `,
  styles: [
  ]
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
