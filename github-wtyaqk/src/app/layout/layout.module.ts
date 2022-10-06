import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/BrowserAnimationsModule';
import {MatButtonModule} from '@angular/MatButtonModule';
import {MatMenuModule} from '@angular/MatMenuModule';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule, 

  ]
})
export class LayoutModule { }
