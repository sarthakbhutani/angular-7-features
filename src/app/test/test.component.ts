import { Component, OnInit } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-test',
  // template: newFunction(),
  template : `<div>
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
  <h1 [class]="textSuccess">
    Bhutani
  </h1>
  <h1 bind-class = "textFailiure">
    Bhutani
  </h1>
  <h1 [class]="textSpecial">
    Bhutani
  </h1>
  <h1 [class.text-failiure]="hasError">
    Bhutani
  </h1>
  <h1 [ngClass]="messageClasses">
    Bhutani
  </h1>

  <!--Style Binding-->
  <h1 [style.color]=" 'green' ">
  Style Binding
  </h1>
  <h1 [style.color]="setGreen">
    Bhutani
  </h1>
  <h1 [ngStyle]="setStyles">
    Bhutani
  </h1>
  <h1 [style.color]="hasError? 'red' : 'green' ">
    Bhutani
  </h1>
  <button (click) = "onClick($event)">
    Event Binding
  </button>
  
  <h2>
  {{greeting}}
  </h2>
  <h2>
    Event Binding
  </h2>
  <input type = "text" #inputVariableName>
  <button (click)= "onClickForInput(inputVariableName)" >log</button>
  <h2>
    2 way Binding
  </h2>
  <input type="text" [(ngModel)]="twoWayVar" >
  {{twoWayVar}}
  <h2>
    ngIf
  </h2>
  <h2 *ngIf="displayBlock; else elseBlock;">
    Yes
  </h2>
  <ng-template #elseBlock>
    <h2>
      don't display, until false
    </h2>
  </ng-template> 

  <div *ngIf="displayblock; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock> 
    <h2 #thenBlock>
      Yes, then.
    </h2>
  </ng-template>
  <div [ngSwitch]="setGreen">
    <div *ngSwitchCase = "'green'"><h2>green</h2></div>
    <div *ngSwitchCase = "'orange'"><h2>orange</h2></div>
    <div *ngSwitchDefault><h2>default case, pick again</h2></div>

  <h2>ngFor</h2>
  <div *ngFor="let color of colors; index as i; last as l">
    <h3> {{i}} {{color}} {{l}}</h3>
  </div>

  </div>
    </div>`,
  styles: [`p{
    text-align : center; 
  }
  .text-success{
    color : green;
  }
  .text-failiure{
    color : red;
  }
  .text-italics{
    font-style: italic;
  }
    `]
})

export class TestComponent implements OnInit {
  public name = "Bhutani";
  public isDisabled = false;
  public hasError = true;
  public isSpecial = true;
  public textSuccess = "text-success";
  public textFailiure = "text-failiure";
  public textSpecial = "text-italics";
  public setGreen = "green";
  public greeting = "naah, press the button";
  constructor() { }
  public twoWayVar = " as";

  public colors = ["green","blue","black"];
  public displayBlock = false;
  messageClasses={
    "text-success" : !this.hasError,
    "text-failiure" : this.hasError,
    "text-italics" : this.isSpecial
  }

  setStyles = {
    color : "green",
    fontStyle : "italic"
  }
  ngOnInit() {
  }

  public getUrl() {
    return window.location.href;
  }

  onClick(event){
    console.log('Hey, I am greeting you.');
    console.log(event);
    this.greeting = "Hey, How are you?";
  }
  onClickForInput(input){
    console.log(input);
    console.log(input.value);
  }
}

// function newFunction(): string {
//   return `<div>
//   <h1>
//     Welcome {{name}}
//   </h1>
//   <h1>
//     {{name.lenght}}
//   </h1>
//   <h1>
//     Welcome {{name.toUpperCase()}}
//   </h1>
//   <h1>
//     Welcome {{name.toLowerCase()}}
//   </h1>
//   <h1>
//     {{getUrl()}}
//   </h1>
//   <input type="text" value="Placeholder" bind-disabled = "isDisabled">
//   <h1 [class]="textSuccess">
//     Bhutani
//   </h1>
//   <h1 bind-class = "textFailiure">
//     Bhutani
//   </h1>
//   <h1 [class]="textSpecial">
//     Bhutani
//   </h1>
//   <h1 [class.text-failiure]="hasError">
//     Bhutani
//   </h1>
//   <h1 [ngClass]="messageClasses">
//     Bhutani
//   </h1>

//   <!--Style Binding-->
//   <h1 [style.color]=" 'green' ">
//   Style Binding
//   </h1>
//   <h1 [style.color]="setGreen">
//     Bhutani
//   </h1>
//   <h1 [ngStyle]="setStyles">
//     Bhutani
//   </h1>
//   <h1 [style.color]="hasError? 'red' : 'green' ">
//     Bhutani
//   </h1>
//   <button (onclick) = "onClick()">
//     Event Binding
//   </button>
  
//   <h2>
//   {{greeting}}
//   </h2>
//   <h2>
//     Event Binding
//   </h2>

//   </div>`;
// }

