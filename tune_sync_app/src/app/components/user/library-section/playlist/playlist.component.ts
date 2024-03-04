import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from '../../../../services/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent  implements OnInit {

  allPlaylist : any = [];

  constructor(private playlistService:PlaylistService, private router: Router) { }

  ngOnInit() {
    this.playlistService.getAllPlaylists()
    .subscribe((res)=>{
      this.allPlaylist = res;
      // console.log(this.allPlaylist);
      
    })
  }

  onDeletePlaylist(id:string){
    if (confirm('Are you really want to delete it?s')) {
      // console.log("Delete it");
      this.playlistService.deletePlaylist(parseInt(id))
      .subscribe((res)=>{
        alert("Playlist deleted successfully")
        this.allPlaylist = this.allPlaylist.filter(item => item.playlist_Id !== id);
        // this.router.navigate(['/library']);
      })
    }
  }

}
