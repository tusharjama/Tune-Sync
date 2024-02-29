import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { AddNewSongComponent } from './components/add-new-song/add-new-song.component';
import { AuthComponent } from './components/auth/auth.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { LikedSongsComponent } from './components/liked-songs/liked-songs.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'auth', component:AuthComponent},
  {path:'artists/artist-details', component: ArtistDetailsComponent},
  {path:'add-new-song', component: AddNewSongComponent},
  {path:'artists', component: ArtistsComponent},
  {path:'liked-songs', component: LikedSongsComponent},
  {path:'categories', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
