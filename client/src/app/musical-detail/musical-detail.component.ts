import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

interface Musical {
  name: string,
  openDate: Date,
  closeDate: Date,
  location: string,
  spotifyAlbum : string,
  albumCover: string
}

@Component({
  selector: 'app-musical-detail',
  templateUrl: './musical-detail.component.html',
  styleUrl: './musical-detail.component.scss'
})
export class MusicalDetailComponent implements OnInit {
    musicalId: number = 0;
    musical: Musical = {
      name: '',
      openDate: new Date(),
      closeDate: new Date(),
      location: '',
      spotifyAlbum : '',
      albumCover: ''
    };

  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer, private router: Router) { }

  //get the trusted URL for the iframe
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.musicalId = id ? +id : 0;
    this.getMusical().subscribe(data => 
      {
        console.log(data);
        this.musical = data;
      });
      
  }

  getMusical() {
    return this.http.get<Musical>(`http://localhost:5132/api/Musical/${this.musicalId}`)
  }

  deleteMusical() {
    this.http.delete(`http://localhost:5132/api/Musical/${this.musicalId}`).subscribe({
      next: res => console.log(res),
      error: err => console.error(err)
    });
    this.router.navigate(['/musicals'])
  }

  
}
