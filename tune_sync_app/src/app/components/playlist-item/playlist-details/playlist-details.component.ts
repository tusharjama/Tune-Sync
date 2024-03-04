import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../../services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
})
export class PlaylistDetailsComponent implements OnInit {

  playlistDetails: any = {};

  constructor(private playlistService: PlaylistService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    // console.log('ID:', id);
    this.playlistService.getPlaylistById(id).subscribe((res) => {

      // console.log(res);
      res.songs_in_List = res.songs_in_List.split(',');

      // console.log(res);

      this.playlistDetails = res;
    })
  }

  removeFromPlaylist(id: string) {
    // console.log(id);
    if (this.playlistDetails.songs_in_List.length == 1) {

      if (confirm('This is last song of your playlist. If it will be deleted then whole playlist will be deleted. Are you till want to delete it?')) {
        // console.log("Delete it");
        this.playlistService.deletePlaylist(parseInt(this.playlistDetails.playlist_Id))
        .subscribe((res)=>{
          alert("Playlist deleted successfully")
          this.router.navigate(['/library']);
        })
      }

    } else {
      var tempArr = this.playlistDetails.songs_in_List.filter(item => item !== id);

      var songIds: string = tempArr.join(',');

      // console.log(songIds);

      this.playlistService.updatePlaylist(parseInt(this.playlistDetails.playlist_Id), songIds)
        .subscribe((res) => {
          console.log(res);
          alert(res.msg)
          this.playlistDetails.songs_in_List = this.playlistDetails.songs_in_List.filter(item => item !== id);

        })
    }


  }

}
