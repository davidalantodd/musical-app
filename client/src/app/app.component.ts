import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Musical {
  name: string,
  openDate: Date,
  closeDate: Date,
  location: string,
  spotifyAlbum : string,
  albumCover: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  musicals: Musical[] = [];

  constructor(private http: HttpClient) { }

  getMusicals() {
    return this.http.get<Musical[]>("http://localhost:5132/api/Musical/")
  }

  ngOnInit() {
    this.getMusicals().subscribe(data => 
      {
        console.log(data);
        this.musicals = data;
      });
      
  }

  
}
