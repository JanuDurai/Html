import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template:`<b>Single Line Content projection</b> <ng-content>
  </ng-content>`,
  styles: [`b {
    background-color: aqua;
    color: royalblue;
}`]
})
export class NavbarComponent {
  course = [1,2,3,4,5];
  

}
