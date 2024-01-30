import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

interface Musical {
  id: any|string;
  name: string,
  openDate: Date,
  closeDate: Date,
  location: string,
  spotifyAlbum : string,
  albumCover: string
}

@Component({
  selector: 'app-musical-list',
  templateUrl: './musical-list.component.html',
  styleUrl: './musical-list.component.scss'
})
export class MusicalComponent implements OnInit {
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
