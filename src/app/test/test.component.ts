import { Component, OnInit } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-test',
  template: `<div>
  <h1>
    Welcome {{name}}
  </h1>
  <h1>
    {{name.lenght}}
  </h1>
  <h1>
    Welcome {{name.toUpperCase()}}
  </h1>
  <h1>
    Welcome {{name.toLowerCase()}}
  </h1>
  <h1>
    {{getUrl()}}
  </h1>
  <input type="text" value="Placeholder" bind-disabled = "isDisabled">
  </div>`,
  styles: [`p{
    text-align : center; }`]
})

export class TestComponent implements OnInit {
  public name = "Bhutani";
  public isDisabled = false;
  constructor() { }

  ngOnInit() {
  }

  public getUrl() {
    return window.location.href;
  }
}
