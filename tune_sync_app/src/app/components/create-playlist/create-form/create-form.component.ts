import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaylistService } from '../../../services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent  implements OnInit {

  coverLetter: string;
  songsCnt: number;
  playlistArr: number[];
  emptySongListMsg: string;
  createPlaylistForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private playlistService: PlaylistService, private router: Router) { }

  ngOnInit() {
    this.coverLetter = "P";
    this.songsCnt = 0;
    this.playlistArr = [];

    this.emptySongListMsg = "";

    this.createPlaylistForm = this.formBuilder.group({
      playlistTitle: ['', Validators.required]
    });
  }
  updateCoverLetter(event: any) {
    this.coverLetter = event.target.value[0];
  }

  addRemoveToPlaylist(event: any, id:number){

    // console.log(event.target.name);
    if(event.target.name == "add-circle"){
      event.target.name = "remove-circle";
      this.playlistArr.push(id);
      this.emptySongListMsg = "";
      event.target.classList.add('redColor');
      // console.log(this.playlistArr);

    }else{
      event.target.name = "add-circle";
      this.playlistArr = this.playlistArr.filter(number => number !== id);
      // console.log(this.playlistArr);
      event.target.classList.remove('redColor');
    }
    this.songsCnt = this.playlistArr.length;
    
  }

  onCreatePlaylistSubmit(){
    if(this.playlistArr.length <= 0){
      this.emptySongListMsg = "*Please Select at least one song."
    }else{
      this.emptySongListMsg = "";
      console.log('Form submitted!', this.createPlaylistForm.value);
      console.log(this.playlistArr);
     
      var userId = 1;
      var playlistName= this.createPlaylistForm.get('playlistTitle').value;
      var songIds :string = this.playlistArr.join(',');
      // console.log(typeof(songIds));
      

      // console.log(data);

      this.playlistService.createPlaylist(userId, playlistName, songIds)
      .subscribe((res)=>{
        // alert("New Playlist is created")
        this.router.navigate(['/library']);
        // console.log(res);
      })
      
    }
  }
}
