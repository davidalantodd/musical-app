import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicalDetailComponent } from './musical-detail/musical-detail.component';
import { MusicalComponent } from './musical-list/musical-list.component';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MusicalsRefreshService } from './musicals-refresh.service';

@NgModule({
  declarations: [
    AppComponent,
    MusicalComponent,
    MusicalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [
    MusicalsRefreshService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }