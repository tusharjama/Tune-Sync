import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss'],
})
export class CreatePlaylistComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  toggleNavigation(){
    // console.log("toggle Clicked");
    
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");

    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }
  
}
