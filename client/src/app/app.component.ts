import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatCardModule} from '@angular/material/card'
import { DomSanitizer } from '@angular/platform-browser';

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
  imports: [CommonModule, RouterOutlet, HttpClientModule, MatCardModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  musicals: Musical[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }


  //get the trusted URL for the iframe
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

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
