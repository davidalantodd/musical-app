import {NgModule} from '@angular/core'
import { Routes, RouterModule, Router } from '@angular/router';
import { MusicalComponent } from './musical-list/musical-list.component';
import { MusicalDetailComponent } from './musical-detail/musical-detail.component';
import { CreateMusicalFormComponent } from './create-musical-form/create-musical-form.component';
import { EditMusicalFormComponent } from './edit-musical-form/edit-musical-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/musicals', pathMatch: 'full' },
    { path: 'musicals', component: MusicalComponent },
    { path: 'musicals/new', component: CreateMusicalFormComponent},
    { path: 'musicals/:id', component: MusicalDetailComponent},
    { path: 'musicals/:id/edit', component: EditMusicalFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }