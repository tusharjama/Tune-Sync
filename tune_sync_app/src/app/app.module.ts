import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TopRatedSongsComponent } from './components/home/top-rated-songs/top-rated-songs.component';
import { PopularSongsComponent } from './components/home/popular-songs/popular-songs.component';
import { TopArtistsComponent } from './components/home/top-artists/top-artists.component';
import { IonicModule } from '@ionic/angular';
import { SongCardItemComponent } from './components/song-card-item/song-card-item.component';
import { ArtistCardItemComponent } from './components/artist-card-item/artist-card-item.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { AddNewSongComponent } from './components/add-new-song/add-new-song.component';
import { ArtistSongsComponent } from './components/artist-songs/artist-songs.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './components/artists/artists.component';
import { LikedSongsComponent } from './components/liked-songs/liked-songs.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryComponent } from './components/category/category.component';
import { LibrarySectionComponent } from './components/library-section/library-section.component';
import { PlaylistComponent } from './components/library-section/playlist/playlist.component';
import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { PlaylistDetailsComponent } from './components/playlist-item/playlist-details/playlist-details.component';
import { CreatePlaylistComponent } from './components/create-playlist/create-playlist.component';
import { CreateFormComponent } from './components/create-playlist/create-form/create-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CountCommasPipe } from './pipes/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    TopbarComponent,
    TopRatedSongsComponent,
    PopularSongsComponent,
    TopArtistsComponent,
    SongCardItemComponent,
    ArtistCardItemComponent,
    ArtistDetailsComponent,
    AddNewSongComponent,
    ArtistSongsComponent,
    AuthComponent,
    ArtistsComponent,
    LikedSongsComponent,
    CategoryCardComponent,
    CategoryComponent,
    LibrarySectionComponent,
    PlaylistComponent,
    PlaylistItemComponent,
    PlaylistDetailsComponent,
    CreatePlaylistComponent,
    CreateFormComponent,
    CountCommasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    IonicModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
