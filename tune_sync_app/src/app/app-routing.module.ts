import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { AddNewSongComponent } from './components/add-new-song/add-new-song.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'auth', component:AuthComponent},
  {path:'artist', component: ArtistDetailsComponent},
  {path:'add-new-song', component: AddNewSongComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
