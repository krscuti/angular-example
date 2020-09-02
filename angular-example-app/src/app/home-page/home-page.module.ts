import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { LoginRoutingModule } from './home-page-routing.module';
import { LoginComponent } from './login/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import {TopNavComponent} from './layout/top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, LayoutComponent, TopNavComponent]
})
export class HomePageModule {}
