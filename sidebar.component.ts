import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `<b>Multi Line Content projection</b> <ng-content>
             </ng-content>`  ,
  styles: [`b{
    background-color: bisque;
    color: blueviolet;
}`]
})
export class SidebarComponent {

}
