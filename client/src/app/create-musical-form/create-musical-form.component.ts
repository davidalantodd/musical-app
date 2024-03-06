import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterConfigOptions } from '@angular/router'
import { MusicalsRefreshService } from '../musicals-refresh.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-create-musical-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-musical-form.component.html',
  styleUrl: './create-musical-form.component.scss',
})
export class CreateMusicalFormComponent {
  createMusicalForm = new FormGroup({
    name: new FormControl(''),
    openDate: new FormControl(''),
    closeDate: new FormControl(''),
    location: new FormControl(''),
    spotifyAlbum: new FormControl(''),
    albumCover: new FormControl('')
  });

  constructor(private http: HttpClient, private router: Router, private refreshService: MusicalsRefreshService) { }


  async createMusical(musical: any) {
    try {
      await firstValueFrom(this.http.post('http://localhost:5132/api/Musical/', musical))
      await this.refreshService.requestRefresh();
    } catch (err) {
      console.error(err)
    }
  }

async onSubmit() {
    const formData = this.createMusicalForm.value;
    formData.openDate = formData.openDate ? new Date(formData.openDate).toISOString() : '';
    formData.closeDate = formData.closeDate ? new Date(formData.closeDate).toISOString() : '';
    await this.createMusical(formData);
    await this.router.navigate(['/musicals'])
  }

}
