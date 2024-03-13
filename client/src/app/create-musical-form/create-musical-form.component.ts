import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterConfigOptions } from '@angular/router'
import { MusicalsRefreshService } from '../musicals-refresh.service';
import { firstValueFrom } from 'rxjs';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-create-musical-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatIconModule,
    MatIcon,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  templateUrl: './create-musical-form.component.html',
  styleUrl: './create-musical-form.component.scss',
})
export class CreateMusicalFormComponent {
  createMusicalForm = new FormGroup({
    name: new FormControl(''),
    openDate: new FormControl(new Date()),
    closeDate: new FormControl(new Date()),
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
    formData.openDate = formData.openDate ? new Date(formData.openDate) : null;
    formData.closeDate = formData.closeDate ? new Date(formData.closeDate) : null;
    await this.createMusical(formData);
    await this.router.navigate(['/musicals'])
  }

}
