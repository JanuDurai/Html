import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpbarComponent } from './upbar/upbar.component';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './hover.directive';
import { MathService } from './service/math.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    UpbarComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
