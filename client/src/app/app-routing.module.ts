import {NgModule} from '@angular/core'
import { Routes, RouterModule, Router } from '@angular/router';
import { MusicalComponent } from './musical-list/musical-list.component';
import { MusicalDetailComponent } from './musical-detail/musical-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/musicals', pathMatch: 'full' },
    { path: 'musicals', component: MusicalComponent },
    { path: 'musicals/:id', component: MusicalDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }