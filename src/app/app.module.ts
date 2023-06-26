import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotfoundComponent,
    ViewdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
