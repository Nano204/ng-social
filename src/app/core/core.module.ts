import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, LoginComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
