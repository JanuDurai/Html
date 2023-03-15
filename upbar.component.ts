import { Component } from '@angular/core';
import { MathService } from '../service/math.service';

@Component({
  selector: 'app-upbar',
  template: `<b>Dynamic Component</b>`  ,
  styles: [`b{
    background-color: yellow;
    color: black;
}`]
})
export class UpbarComponent {
  // searchvalue :string = '';
  constructor(public math:MathService) {

  }
}
