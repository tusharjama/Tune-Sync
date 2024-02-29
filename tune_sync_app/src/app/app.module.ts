import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TopRatedSongsComponent } from './components/top-rated-songs/top-rated-songs.component';
import { PopularSongsComponent } from './components/popular-songs/popular-songs.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
import { IonicModule } from '@ionic/angular';
import { SongCardItemComponent } from './components/song-card-item/song-card-item.component';
import { ArtistCardItemComponent } from './components/artist-card-item/artist-card-item.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { AddNewSongComponent } from './components/add-new-song/add-new-song.component';
import { ArtistSongsComponent } from './components/artist-songs/artist-songs.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    MainContainerComponent,
    ArtistDetailsComponent,
    AddNewSongComponent,
    ArtistSongsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
