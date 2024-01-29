import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicalsComponent } from './musicals.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule} from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    MusicalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }