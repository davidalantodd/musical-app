import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { first, firstValueFrom, map } from 'rxjs';

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
  selector: 'app-edit-musical-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-musical-form.component.html',
  styleUrl: './edit-musical-form.component.scss'
})
export class EditMusicalFormComponent {
  musicalId: number = 0;
  editMusicalForm = new FormGroup({
    name: new FormControl(''),
    openDate: new FormControl(''),
    closeDate: new FormControl(''),
    location: new FormControl(''),
    spotifyAlbum: new FormControl(''),
    albumCover: new FormControl('')
  });

  constructor ( private http: HttpClient, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.musicalId = id ? +id : 0;
  }

  editMusical(musical: any) {
    console.log(`http://localhost:5132/api/Musical/${this.musicalId}`)
    this.http.put(`http://localhost:5132/api/Musical/${this.musicalId}`, {Id: this.musicalId, ...musical}).subscribe({
      next: res => console.log(res),
      error: err => console.error(err)
  });
  }

  async onSubmit() {
    const formData = this.editMusicalForm.value;
    formData.openDate = formData.openDate ? new Date(formData.openDate).toISOString() : '';
    formData.closeDate = formData.closeDate ? new Date(formData.closeDate).toISOString() : '';
    await this.editMusical(formData);
    this.router.navigate([`/musicals/${this.musicalId}`])
  }

}
