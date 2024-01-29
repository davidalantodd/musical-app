import {NgModule} from '@angular/core'
import { Routes, RouterModule, Router } from '@angular/router';
import { MusicalsComponent } from './musicals.component';

const routes: Routes = [
    { path: '', redirectTo: '/musicals', pathMatch: 'full' },
    { path: 'musicals', component: MusicalsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }