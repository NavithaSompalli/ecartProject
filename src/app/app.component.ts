import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample16-project';
/*
ng-container Logic: if toggle is false. it will display ng-container element are else ng-template element will be displayed.
  toggle: boolean = true;

  onToggle(){
    this.toggle = !this.toggle;
  } */
}
