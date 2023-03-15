import { Component, OnInit } from '@angular/core';
import { SidebarComponent} from './sidebar/sidebar.component'
import { NavbarComponent } from './navbar/navbar.component';
import { UpbarComponent } from './upbar/upbar.component';
import { MathService } from './service/math.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'project';
  domain:any;
  constructor(public math:MathService) {

  }

  // ngOnInit(){
  //   this.domain = SidebarComponent;
  // }
  // domainSidebar() {
  //   this.domain = SidebarComponent;
  // }
  // domainNavbar() {
  //   this.domain = NavbarComponent;
  // }
  // domainUpbar() {
  //   this.domain = UpbarComponent;
  // }

  // array:any = [
  //   {names : 'Dinesh K'},
  //   {names : 'Sridhar T'},
  //   {names : 'Gowtham R'},
  // ];

  array:any = [
    {names : 'Dinesh K',age : 21,Domain :'Angular'},
    {names : 'Sridhar T',age : 20,Domain :'PHP'},
    {names : 'Gowtham R',age : 21,Domain :'Python'},
    {names : 'Sathur G',age : 20,Domain :'Java'},
  ];
  change1 = 'change1';
  change2 = 'change2';
  colorvalue= 'blue';

  username = 'Dinesh kumar';

  company = 'Aspire Systems';
  location = 'Chennai';
  disabledBox = true;
  enableBox() {
    this.disabledBox = false;
  }

  link = "https://angular.io";
  uplink = "https://angular.io/";

  passing= "true";

  mouseleavecalling() {
    alert('you leaving');
  }
  keyupcalling() {
    console.log("key is pressed");
  }
  
  day = new Date();
  num1 = 250000;
  num2 = 77;
  case1 = 'DiNeSh KumAR';

  holdercalling(holder:any) {
    console.log(holder);  
  }
}
