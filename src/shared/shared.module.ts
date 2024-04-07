import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedModule { }
