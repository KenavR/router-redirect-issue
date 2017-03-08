import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [IsAuthenticatedGuard],
    component: AdminComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot(routes)
  ],
  providers: [IsAuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
