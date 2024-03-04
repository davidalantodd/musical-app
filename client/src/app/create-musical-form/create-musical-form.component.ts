import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  selector: 'app-create-musical-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-musical-form.component.html',
  styleUrl: './create-musical-form.component.scss',
})
export class CreateMusicalFormComponent {
  musicalForm = new FormGroup({
    name: new FormControl(''),
    openDate: new FormControl(''),
    closeDate: new FormControl(''),
    location: new FormControl(''),
    spotifyAlbum: new FormControl(''),
    albumCover: new FormControl('')
  });

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  //get the trusted URL for the iframe
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  createMusical(musical: any) {
    this.http.post('http://localhost:5132/api/Musical/', musical).subscribe({
      next: res => console.log(res),
      error: err => console.error(err)
    });
  }

  onSubmit() {
    const formData = this.musicalForm.value;
    console.log(formData);
    formData.openDate = formData.openDate ? new Date(formData.openDate).toISOString() : '';
    formData.closeDate = formData.closeDate ? new Date(formData.closeDate).toISOString() : '';
    this.createMusical(formData);
  }

}
