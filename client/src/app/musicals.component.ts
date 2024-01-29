import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  templateUrl: './musicals.component.html',
  styleUrl: './musicals.component.scss'
})
export class MusicalsComponent implements OnInit {
  musicals: Musical[] = [];
  title = 'musical-app'

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
