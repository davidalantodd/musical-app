import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { MusicalsRefreshService } from '../musicals-refresh.service';

interface Musical {
  name: string,
  openDate: Date,
  closeDate: Date | null,
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
      closeDate: null,
      location: '',
      spotifyAlbum : '',
      albumCover: ''
    };

  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer, private router: Router, private refreshService: MusicalsRefreshService) { }

  //get the trusted URL for the iframe
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.musicalId = id ? +id : 0;
    this.getMusical().subscribe(data => 
      {
        this.musical = data;
        this.musical.openDate = new Date(this.musical.openDate);
        this.musical.closeDate = this.musical.closeDate ? new Date(this.musical.closeDate) : null;
      });
      
  }

  getMusical() {
    return this.http.get<Musical>(`http://localhost:5132/api/Musical/${this.musicalId}`)
  }

  async deleteMusical() {
    await this.http.delete(`http://localhost:5132/api/Musical/${this.musicalId}`).subscribe({
      next: res => console.log(res),
      error: err => console.error(err)
    });
    await this.refreshService.requestRefresh();
    this.router.navigate(['/musicals'])
  }

  editMusical() {
    this.router.navigate([`/musicals/${Number(this.musicalId)}/edit`])
  }
  
}
