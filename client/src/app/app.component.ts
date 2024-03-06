import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu'
import { Router } from '@angular/router';
import { MusicalsRefreshService } from './musicals-refresh.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'musical-app'
  musicalApiURL: string = "http://localhost:5132/api/Musical/"
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor ( private http: HttpClient, private route: Router, private refreshService: MusicalsRefreshService) {}

  async reseedMusicals() {
    try {
      await firstValueFrom(this.http.get(this.musicalApiURL + 'initialize'))
      await this.refreshService.requestRefresh();
    } catch (err) {
      console.error(err)
    }
    await this.route.navigate(['/','musicals'])
  }
      
  }

  
