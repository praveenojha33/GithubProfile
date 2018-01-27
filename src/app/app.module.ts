import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GithubService} from './github.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers:[GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
