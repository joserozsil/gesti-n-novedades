import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutes } from './auth.routing';

import { SignInComponent } from './signin/sigin.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule
  ],
  declarations: [SignInComponent]
})

export class AuthModule {
    
}
