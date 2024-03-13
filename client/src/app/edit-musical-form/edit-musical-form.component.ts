import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicalsRefreshService } from '../musicals-refresh.service';
import { firstValueFrom } from 'rxjs';
import { DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface Musical {
  id: number;
  name: string,
  openDate: Date,
  closeDate: Date | null,
  location: string,
  spotifyAlbum : string,
  albumCover: string
}

@Component({
  selector: 'app-edit-musical-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './edit-musical-form.component.html',
  styleUrl: './edit-musical-form.component.scss'
})
export class EditMusicalFormComponent {
  musical: Musical = {
    id: 0,
    name: '',
    openDate: new Date(),
    closeDate: new Date(),
    location: '',
    spotifyAlbum : '',
    albumCover: ''
  };
  editMusicalForm = new FormGroup({
    name: new FormControl(''),
    openDate: new FormControl(new Date()),
    closeDate: new FormControl(new Date()),
    location: new FormControl(''),
    spotifyAlbum: new FormControl(''),
    albumCover: new FormControl('')
  });

  constructor (
      private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute,
      private refreshService: MusicalsRefreshService,
      private datePipe: DatePipe
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.musical.id = id ? +id : 0;

    (this.getMusical()).subscribe(data => {
      this.musical = data;
      this.musical.openDate = new Date(this.musical.openDate);
      this.musical.closeDate = this.musical.closeDate ? new Date(this.musical.closeDate) : null;

      this.editMusicalForm.patchValue({
        name: this.musical.name,
        openDate: this.datePipe.transform(this.musical.openDate, 'yyyy-MM-dd') as unknown as Date,
        closeDate: this.musical.closeDate ? this.datePipe.transform(this.musical.closeDate, 'yyyy-MM-dd') as unknown as Date : null,
        location: this.musical.location,
        spotifyAlbum: this.musical.spotifyAlbum,
        albumCover: this.musical.albumCover,
      });
    });
  }

  getMusical() {
    return this.http.get<Musical>(`http://localhost:5132/api/Musical/${this.musical.id}`)
  }
  
  async editMusical(musical: any) {
    try {
      await firstValueFrom(this.http.put(`http://localhost:5132/api/Musical/${this.musical.id}`, {Id: this.musical.id, ...musical}))
      this.refreshService.requestRefresh();
    } catch (err) {
      console.error(err)
    }
  }
  
  async onSubmit() {
    const formData = this.editMusicalForm.value;
    formData.openDate = formData.openDate ? new Date(formData.openDate) : null;
    formData.closeDate = formData.closeDate ? new Date(formData.closeDate) : null;
    await this.editMusical(formData);
    await this.router.navigate([`/musicals/${this.musical.id}`])
  }

  async clickBack() {
    await this.router.navigate([`/musicals/${this.musical.id}`])
  }
  
}

